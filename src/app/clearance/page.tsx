'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import NextImage from 'next/image';
import RotatingGLBBackground from '@/components/RotatingGLBBackground';

type Phase = 'login' | 'scanning' | 'denied' | 'granted';

const VALID_USER = 'WESKER';
const VALID_PASS = 'TYRANT-001';

export default function ClearancePage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phase, setPhase] = useState<Phase>('login');
  const [countdown, setCountdown] = useState(30);
  const [showPass, setShowPass] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  // Fixed session ID
  const sessionId = useRef('UM-' + Math.random().toString(36).substring(2, 8).toUpperCase());
  
  // Preload audio
  const grantedAudio = useRef<HTMLAudioElement | null>(null);
  const deniedAudio = useRef<HTMLAudioElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    grantedAudio.current = new Audio('/audio/granted.mp3');
    deniedAudio.current = new Audio('/audio/denied.mp3');
    grantedAudio.current.load();
    deniedAudio.current.load();
  }, []);

  function playAudio(src: string) {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    
    const audio = src.includes('granted') ? grantedAudio.current : deniedAudio.current;
    if (!audio) return;

    audioRef.current = audio;
    setAudioPlaying(true);
    audio.play().catch(() => {});
    
    const onEnded = () => {
      setAudioPlaying(false);
      audio.removeEventListener('ended', onEnded);
    };
    audio.addEventListener('ended', onEnded);
  }

  useEffect(() => {
    if (phase !== 'denied') return;
    setCountdown(30);
    const interval = setInterval(() => {
      setCountdown((c) => (c <= 1 ? 0 : c - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase === 'denied' && countdown === 0) {
      router.push('/');
    }
  }, [phase, countdown, router]);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPhase('scanning');

    setTimeout(() => {
      if (username.toUpperCase() === VALID_USER && password === VALID_PASS) {
        playAudio('/audio/granted.mp3');
        if (typeof window !== 'undefined') sessionStorage.setItem('umbrella_user', username.toUpperCase());
        setPhase('granted');
      } else {
        playAudio('/audio/denied.mp3');
        setPhase('denied');
      }
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,rgba(255,255,255,0.02) 0px,rgba(255,255,255,0.02) 1px,transparent 1px,transparent 4px)',
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#d2002a]" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#d2002a]" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#d2002a]" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#d2002a]" />

      {/* ─── LOGIN PHASE ─── */}
      {(phase === 'login' || phase === 'scanning') && (
        <div className="relative z-10 w-full max-w-md px-8">
          <div className="flex flex-col items-center mb-10">
            <NextImage
              src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Umbrella_Corporation_logo.svg"
              alt="Umbrella Corporation"
              width={80}
              height={80}
              className="mb-6 opacity-90 h-20 w-auto"
              style={{ filter: 'drop-shadow(0 0 12px rgba(210,0,42,0.6))' }}
              priority
            />
            <h1 className="font-headline text-3xl font-black tracking-tight uppercase text-white text-center">
              UMBRELLA CORP
            </h1>
            <p className="font-headline text-[10px] tracking-[0.4em] uppercase text-[#d2002a] mt-2 text-center">
              Red Queen Protocol Activated
            </p>
            <div className="w-full h-px bg-[#d2002a]/40 mt-6" />
          </div>

          <p className="font-headline text-[9px] tracking-[0.3em] uppercase text-on-surface/30 text-center mb-8">
            Identity Verification Required — Level 4 Clearance
          </p>

          <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
            <div>
              <label className="block font-headline text-[10px] uppercase tracking-widest text-[#d2002a] mb-2">
                Access ID
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ENTER OPERATIVE ID"
                autoComplete="off"
                disabled={phase === 'scanning'}
                className="w-full bg-[#131313] border border-surface-container-high px-4 py-3 font-mono text-sm text-on-surface focus:outline-none focus:border-[#d2002a] transition-colors uppercase tracking-widest disabled:opacity-40"
              />
            </div>

            <div className="relative">
              <label className="block font-headline text-[10px] uppercase tracking-widest text-[#d2002a] mb-2">
                Passphrase
              </label>
              <input
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="ENTER PASSPHRASE"
                autoComplete="new-password"
                disabled={phase === 'scanning'}
                className="w-full bg-[#131313] border border-surface-container-high px-4 py-3 pr-12 font-mono text-sm text-on-surface focus:outline-none focus:border-[#d2002a] transition-colors tracking-widest disabled:opacity-40"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-[38px] text-on-surface/30 hover:text-[#d2002a] transition-colors"
              >
                <span className="material-symbols-outlined text-lg">
                  {showPass ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>

            <button
              type="submit"
              disabled={phase === 'scanning' || !username || !password}
              className="w-full mt-6 py-4 bg-[#d2002a] text-white font-headline font-black uppercase tracking-[0.3em] text-sm hover:bg-[#ff0030] disabled:opacity-50 transition-all duration-150 flex items-center justify-center gap-3"
            >
              {phase === 'scanning' ? (
                <>
                  <span className="material-symbols-outlined text-lg animate-spin">autorenew</span>
                  VERIFYING IDENTITY...
                </>
              ) : (
                'REQUEST ACCESS'
              )}
            </button>
          </form>

          <p className="font-headline text-[9px] text-center text-on-surface/20 tracking-widest uppercase mt-8">
            Unauthorized access attempts are logged and prosecuted
          </p>
        </div>
      )}

      {/* ─── ACCESS DENIED PHASE ─── */}
      {phase === 'denied' && (
        <div className="relative z-10 w-full max-w-lg px-8 text-center">
          <div className="border border-[#d2002a]/60 bg-[#d2002a]/5 p-12">
            <div className="flex justify-center mb-6">
              <span
                className="material-symbols-outlined text-8xl text-[#d2002a]"
                style={{
                  fontVariationSettings: "'FILL' 1",
                  animation: audioPlaying ? 'pulse 0.6s infinite' : 'none',
                }}
              >
                gpp_bad
              </span>
            </div>

            <h2 className="font-headline text-4xl font-black tracking-tighter uppercase text-[#d2002a] mb-2">
              ACCESS DENIED
            </h2>
            <p className="font-headline text-xs tracking-[0.3em] uppercase text-on-surface/50 mb-8">
              Invalid credentials — Incident logged by Red Queen AI
            </p>

            <div className="mb-8">
              <div className="font-mono text-6xl font-black text-[#d2002a] tabular-nums">
                {String(countdown).padStart(2, '0')}
              </div>
              <p className="font-headline text-[10px] uppercase tracking-widest text-on-surface/40 mt-2">
                Redirecting to Home in {countdown} second{countdown !== 1 ? 's' : ''}
              </p>
              <div className="w-full h-1 bg-surface-container-high mt-4">
                <div
                  className="h-full bg-[#d2002a] transition-all duration-1000"
                  style={{ width: `${(countdown / 30) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  audioRef.current?.pause();
                  setAudioPlaying(false);
                  setPhase('login');
                  setUsername('');
                  setPassword('');
                }}
                className="px-6 py-3 border border-[#d2002a] text-[#d2002a] font-headline font-bold uppercase tracking-widest text-xs hover:bg-[#d2002a] hover:text-white transition-all duration-150 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">refresh</span>
                RETRY
              </button>
              <Link
                href="/"
                className="px-6 py-3 bg-surface-container font-headline font-bold uppercase tracking-widest text-xs text-on-surface/60 hover:text-white border border-surface-container-high transition-all duration-150 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">home</span>
                HOME
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ─── ACCESS GRANTED PHASE ─── */}
      {phase === 'granted' && (
        <React.Fragment>
          <RotatingGLBBackground />
          <div className="relative z-10 w-full max-w-lg px-8 text-center">
            <div className="border border-green-700/60 bg-green-900/10 p-12 backdrop-blur-sm">
              <div className="flex justify-center mb-6">
                <span
                  className="material-symbols-outlined text-8xl text-green-400"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                    animation: audioPlaying ? 'pulse 1.2s infinite' : 'none',
                  }}
                >
                  verified_user
                </span>
              </div>

              <h2 className="font-headline text-4xl font-black tracking-tighter uppercase text-green-400 mb-2">
                ACCESS GRANTED
              </h2>
              <p className="font-headline text-xs tracking-[0.3em] uppercase text-green-400/60 mb-8">
                Welcome, Operative {username.toUpperCase()} — Level 4 Clearance Confirmed
              </p>

              <div className="bg-[#131313] border border-green-700/30 p-6 mb-8 text-left space-y-3">
                <div className="flex justify-between font-headline text-[10px] uppercase tracking-widest">
                  <span className="text-on-surface/40">Clearance Level</span>
                  <span className="text-green-400">ALPHA-WHITE</span>
                </div>
                <div className="flex justify-between font-headline text-[10px] uppercase tracking-widest">
                  <span className="text-on-surface/40">Session ID</span>
                  <span className="text-on-surface/70 font-mono">{sessionId.current}</span>
                </div>
                <div className="flex justify-between font-headline text-[10px] uppercase tracking-widest">
                  <span className="text-on-surface/40">Status</span>
                  <span className="text-green-400">AUTHENTICATED</span>
                </div>
              </div>

              <Link
                href="/clearance/global-sectors"
                className="inline-flex items-center gap-2 px-8 py-3 bg-green-700 text-white font-headline font-bold uppercase tracking-widest text-xs hover:bg-green-600 transition-all duration-150"
              >
                <span className="material-symbols-outlined text-sm">shield</span>
                ENTER DASHBOARD
              </Link>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
