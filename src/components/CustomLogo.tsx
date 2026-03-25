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
      return new THREE.MeshPhysicalMaterial({
        color: originalMat.color || 0xffffff,
        map: originalMat.map || null,
        vertexColors: originalMat.vertexColors || false,
        metalness: 0.3,
        roughness: 0.1,
        transmission: 0.9,
        ior: 1.5,
        thickness: 2,
        transparent: true,
        envMapIntensity: 2,
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
