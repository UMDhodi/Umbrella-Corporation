'use client';

import { useGLTF } from '@react-three/drei';
import { useMemo, useEffect } from 'react';
import * as THREE from 'three';

export default function CustomDNA(props: any) {
  const { scene } = useGLTF('/models/dna.glb');

  // Exact Dribbble Photorealistic Thick Red Glass
  const dribbbleGlass = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: 0x220000, 
    metalness: 0.2, // Low metalness, high transmission = pure glass
    roughness: 0.05, // Ultra smooth surface
    clearcoat: 1.0, // High-end lacquer reflection
    clearcoatRoughness: 0.1,
    transmission: 0.9, // Lets background light through
    ior: 1.6, // Glass index of refraction
    thickness: 5, // Simulates thick, dense lab glass
    emissive: new THREE.Color('#ff0000'),
    emissiveIntensity: 0.6, // Deep internal red glow
    transparent: true,
  }), []);

  // Mutate raw scene directly to prevent clone-destruction of rig data
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          (child as THREE.Mesh).material = dribbbleGlass;
        }
      });
    }
  }, [scene, dribbbleGlass]);

  return <primitive object={scene} {...props} />;
}

useGLTF.preload('/models/dna.glb');
