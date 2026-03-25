import { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Preload, Bounds, useProgress } from '@react-three/drei';
import gsap from 'gsap';
import * as THREE from 'three';
import CustomLogo from './CustomLogo';

function RotatingLogo() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotating the logo's group clockwise consistently around the Z axis (facing camera)
      groupRef.current.rotation.z -= delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Still rotating Y 90 degrees so the umbrella front faces the camera */}
      <CustomLogo rotation={[0, Math.PI / 2, 0]} />
    </group>
  );
}

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [logoRendered, setLogoRendered] = useState(false);
  const { active, progress: loadProgress } = useProgress();
  const containerRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const loaderBarRef = useRef<HTMLDivElement>(null);

  // Monitor ThreeJS loading state to ensure loading only starts when GLB is fully rendered
  useEffect(() => {
    if (!active && loadProgress === 100) {
      const timer = setTimeout(() => setLogoRendered(true), 200);
      return () => clearTimeout(timer);
    }
  }, [active, loadProgress]);

  // Failsafe in case Drei useProgress skips due to instant cache hit
  useEffect(() => {
    const timer = setTimeout(() => setLogoRendered(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Prevent the loading bar from running until logo is visible
    if (!logoRendered) return;

    let currentProgress = 0;
    let timerId: NodeJS.Timeout;

    const simulateLoading = () => {
      // Small jumps normally, large jumps occasionally
      const jump = Math.random() > 0.8 ? Math.floor(Math.random() * 15) + 5 : Math.floor(Math.random() * 4) + 1;
      currentProgress += jump;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(currentProgress);
        
        // Outro animation
        const tl = gsap.timeline({
          onComplete: () => {
            gsap.to(containerRef.current, {
              autoAlpha: 0,
              duration: 0.6,
              ease: 'power2.inOut',
              onComplete: onComplete
            });
          }
        });

        tl.to(logoWrapperRef.current, {
          scale: 1.5,
          opacity: 0,
          filter: 'blur(20px)',
          duration: 0.8,
          ease: 'power3.in',
        }, "+=0.1")
        .to(textRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in'
        }, "-=0.6")
        .to(loaderBarRef.current, {
          width: '0%',
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in'
        }, "-=0.6");
      } else {
        setProgress(currentProgress);
        
        // Realistic next tick delay: usually fast (50-150ms), occasionally hangs (up to 400ms)
        const nextTick = Math.random() > 0.9 ? Math.floor(Math.random() * 300) + 100 : Math.floor(Math.random() * 100) + 50;
        timerId = setTimeout(simulateLoading, nextTick);
      }
    };

    // First initial tick
    timerId = setTimeout(simulateLoading, 150);

    return () => clearTimeout(timerId);
  }, [logoRendered, onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-umbrella-charcoal text-umbrella-white overflow-hidden"
    >
      <div ref={logoWrapperRef} className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none opacity-60 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true, antialias: true }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} color="#ffffff" />
          <spotLight position={[-10, 5, 10]} angle={0.3} penumbra={1} intensity={3} color="#ff1a1a" />
          <Suspense fallback={
            <mesh>
              <ringGeometry args={[0.5, 0.6, 32]} />
              <meshBasicMaterial color="#d2002a" transparent opacity={0.5} side={THREE.DoubleSide} />
            </mesh>
          }>
            <Bounds fit observe margin={0.8}>
              <Float speed={1.5} rotationIntensity={0} floatIntensity={0.5}>
                <RotatingLogo />
              </Float>
            </Bounds>
            <Environment preset="studio" />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      <div ref={textRef} className={`relative z-10 flex flex-col items-center gap-2 mt-auto mb-24 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] transition-opacity duration-700 ease-in-out ${logoRendered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="font-mono flex flex-col items-center text-center gap-2 mb-4">
          <div className="text-sm tracking-[0.4em] text-white/50 uppercase">
            Welcome To
          </div>
          <div className="text-xl tracking-[0.3em] font-bold text-bio-red drop-shadow-[0_0_8px_rgba(255,26,26,0.6)]">
            UMBRELLA CORPORATION
          </div>
        </div>
        <div className="font-mono text-4xl font-bold tracking-widest tabular-nums drop-shadow-lg">
          {progress.toString().padStart(3, '0')}%
        </div>
        <div className="w-64 h-1 bg-white/10 mt-2 relative overflow-hidden">
          <div 
            ref={loaderBarRef}
            className="absolute inset-y-0 left-0 bg-bio-red box-glow-red"
            style={{ width: `${progress}%`, transition: 'width 0.1s ease-out' }}
          />
        </div>
        <div className="font-mono text-[10px] tracking-widest text-white/40 mt-1 uppercase">
          ESTABLISHING SECURE CONNECTION...
        </div>
      </div>
    </div>
  );
}
