'use client';

import { Suspense, useRef, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bounds, Environment, Float, Preload } from '@react-three/drei';
import * as THREE from 'three';
import CustomLogo from './CustomLogo';

const IDLE_TIMEOUT_MS = 2 * 60 * 1000; // 2 minutes

function RotatingLogoSS() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_state, delta) => {
    if (groupRef.current) {
      // Clockwise, matching the preloader
      groupRef.current.rotation.z -= delta * 0.4;
    }
  });
  return (
    <group ref={groupRef}>
      <CustomLogo rotation={[0, Math.PI / 2, 0]} />
    </group>
  );
}

export default function UmbrellaScreensaver() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismiss = useCallback(() => {
    if (!active) return;
    setActive(false);
    // Fade-out then hide
    setTimeout(() => setVisible(false), 700);
  }, [active]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setVisible(true);
      // Small delay to allow DOM paint before activating fade-in
      setTimeout(() => setActive(true), 50);
    }, IDLE_TIMEOUT_MS);
  }, []);

  useEffect(() => {
    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'click'];

    const handleActivity = () => {
      dismiss();
      resetTimer();
    };

    events.forEach(e => window.addEventListener(e, handleActivity, { passive: true }));
    resetTimer();

    return () => {
      events.forEach(e => window.removeEventListener(e, handleActivity));
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [dismiss, resetTimer]);

  if (!visible) return null;

  return (
    <div
      onClick={dismiss}
      onMouseMove={dismiss}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] transition-opacity duration-700 cursor-none select-none ${active ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Subtle radial scanline grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(#e5e2e1 0.5px, transparent 0.5px)', backgroundSize: '22px 22px' }}
      />

      {/* Red glow corona behind logo */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-[#d2002a]/10 blur-[100px] pointer-events-none" />

      {/* 3D Canvas — fills the screen */}
      <div className="absolute inset-0 z-10">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.15} />
          <directionalLight position={[10, 10, 5]} intensity={0.4} color="#ffffff" />
          <spotLight position={[-8, 4, 8]} angle={0.3} penumbra={1} intensity={4} color="#ff1a1a" />
          <Suspense fallback={
            <mesh>
              <ringGeometry args={[0.5, 0.6, 32]} />
              <meshBasicMaterial color="#d2002a" transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>
          }>
            <Bounds fit observe margin={1.2}>
              <Float speed={1.2} rotationIntensity={0} floatIntensity={0.3}>
                <RotatingLogoSS />
              </Float>
            </Bounds>
            <Environment preset="studio" />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

