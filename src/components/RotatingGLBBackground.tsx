'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bounds, Environment, Float, Preload } from '@react-three/drei';
import * as THREE from 'three';
import CustomLogo from './CustomLogo';

function RotatingLogo() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      // Same as preloader: clockwise on Z-axis
      groupRef.current.rotation.z -= delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <CustomLogo rotation={[0, Math.PI / 2, 0]} />
    </group>
  );
}

export default function RotatingGLBBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} color="#ffffff" />
        <spotLight position={[-10, 5, 10]} angle={0.3} penumbra={1} intensity={3} color="#ff1a1a" />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={0.8}>
            <Float speed={1.5} rotationIntensity={0} floatIntensity={0.5}>
              <RotatingLogo />
            </Float>
          </Bounds>
          <Environment preset="studio" />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
