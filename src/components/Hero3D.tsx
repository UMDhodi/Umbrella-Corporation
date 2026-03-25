'use client';

import { Canvas } from '@react-three/fiber';
import { Float, Center, Sparkles } from '@react-three/drei';
import { Suspense, useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomDNA from './CustomDNA';

gsap.registerPlugin(ScrollTrigger);

function SceneElements() {
  const groupRef = useRef<THREE.Group>(null);
  
  useEffect(() => {
    if (!groupRef.current) return;

    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5,
      animation: gsap.to(groupRef.current.rotation, {
        y: Math.PI * 4, // 2 full smooth rotations
        ease: "none"
      })
    });
    
    ScrollTrigger.refresh();
  }, []);

  return (
    // Shifted heavily to the right (x=3.5) and tilted slightly like the Dribbble shot
    <group ref={groupRef} position={[3.5, 0, -5]} rotation={[0.1, 0, -0.2]}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
        <Center scale={3.5}>
          <CustomDNA />
        </Center>
      </Float>
      
      {/* Floating "Data Fragments" representing T-Virus particles or data */}
      <Sparkles 
        count={200} 
        scale={15} 
        size={4} 
        speed={0.4} 
        opacity={0.3} 
        color="#ff1a1a" 
      />
      <Sparkles 
        count={50} 
        scale={20} 
        size={10} 
        speed={0.2} 
        opacity={0.1} 
        color="#ffffff" 
      />
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0B0D11']} />
        
        {/* Dribbble Cinematic Lighting */}
        <ambientLight intensity={0.1} />
        {/* Front fill light */}
        <directionalLight position={[0, 0, 5]} intensity={0.5} color="#ffffff" />
        {/* Intense Red Rim Light from right */}
        <spotLight position={[10, 5, 5]} angle={0.5} penumbra={1} intensity={8} color="#ff0000" />
        {/* Crisp White Rim Light from left bottom to punch out geometry */}
        <spotLight position={[-10, -5, -5]} angle={0.5} penumbra={1} intensity={6} color="#ffffff" />
        
        <Suspense fallback={null}>
          <SceneElements />
        </Suspense>
      </Canvas>
    </div>
  );
}
