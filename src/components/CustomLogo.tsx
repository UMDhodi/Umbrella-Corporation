'use client';

import { useGLTF, Center } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';

export default function CustomLogo(props: any) {
  const { scene } = useGLTF('/models/umbrella_corporation.glb');
  
  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    
    const applyGlass = (mat: THREE.Material) => {
      const originalMat = mat as THREE.MeshStandardMaterial;
      const color = originalMat.color || new THREE.Color(0xffffff);
      
      // Determine if it's the red or white part based on basic color analysis
      const isRed = color.r > 0.5 && color.g < 0.2 && color.b < 0.2;

      return new THREE.MeshPhysicalMaterial({
        color: color,
        metalness: 0.5,
        roughness: 0.2,
        transmission: 0.6, // Slightly less transparent to ensure visibility
        thickness: 1.5,
        ior: 1.5,
        transparent: true,
        opacity: 0.9,     // Ensure it's visible even without an environment map
        envMapIntensity: 1.5,
      });
    };

    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (Array.isArray(mesh.material)) {
          mesh.material = mesh.material.map(applyGlass);
        } else if (mesh.material) {
          mesh.material = applyGlass(mesh.material);
        }
      }
    });
    
    return clone;
  }, [scene]);

  return (
    <Center>
      <primitive object={clonedScene} {...props} />
    </Center>
  );
}

useGLTF.preload('/models/umbrella_corporation.glb');
