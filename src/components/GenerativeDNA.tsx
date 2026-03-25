'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function GenerativeDNA({ count = 80, length = 20, radius = 2 }) {
  const strand1Ref = useRef<THREE.InstancedMesh>(null);
  const strand2Ref = useRef<THREE.InstancedMesh>(null);
  const bridgesRef = useRef<THREE.InstancedMesh>(null);

  const { dummy, bridgeDummy } = useMemo(() => {
    return {
      dummy: new THREE.Object3D(),
      bridgeDummy: new THREE.Object3D(),
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    let i = 0;
    
    // Animate the DNA structure (slow rotation and subtle undulating wave)
    if (strand1Ref.current && strand2Ref.current && bridgesRef.current) {
      strand1Ref.current.rotation.y = time * 0.2;
      strand2Ref.current.rotation.y = time * 0.2;
      bridgesRef.current.rotation.y = time * 0.2;

      for (let j = 0; j < count; j++) {
        // distribute along Y axis
        const y = (j / count) * length - length / 2;
        // Frequency of the helix twist
        const t = j * 0.3 + time * 0.5;

        // Position for strand 1 (offset by sine wave)
        const x1 = Math.cos(t) * radius;
        const z1 = Math.sin(t) * radius;

        dummy.position.set(x1, y, z1);
        dummy.updateMatrix();
        strand1Ref.current.setMatrixAt(i, dummy.matrix);

        // Position for strand 2
        const x2 = Math.cos(t + Math.PI) * radius;
        const z2 = Math.sin(t + Math.PI) * radius;

        dummy.position.set(x2, y, z2);
        dummy.updateMatrix();
        strand2Ref.current.setMatrixAt(i, dummy.matrix);

        // Bridge between strands
        bridgeDummy.position.set((x1 + x2) / 2, y, (z1 + z2) / 2);
        
        // Orient the bridge cylinder to face the points
        const target = new THREE.Vector3(x1, y, z1);
        bridgeDummy.lookAt(target);
        
        // Scale bridge cylinder to match diameter (radius * 2)
        bridgeDummy.scale.set(1, 1, radius * 2);
        bridgeDummy.updateMatrix();
        bridgesRef.current.setMatrixAt(i, bridgeDummy.matrix);

        i++;
      }
      
      strand1Ref.current.instanceMatrix.needsUpdate = true;
      strand2Ref.current.instanceMatrix.needsUpdate = true;
      bridgesRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  const glassMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.1,
    roughness: 0.05,
    transmission: 0.9,
    ior: 1.5,
    thickness: 0.5,
    emissive: new THREE.Color('#ff0000'),
    emissiveIntensity: 0.2,
    transparent: true,
  }), []);

  const bridgeMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: 0x333333,
    emissive: new THREE.Color('#ff1a1a'),
    emissiveIntensity: 1.0,
    transparent: true,
    opacity: 0.7,
  }), []);

  return (
    <group>
      {/* Base Strands (Phosphates) */}
      <instancedMesh ref={strand1Ref} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <primitive object={glassMaterial} attach="material" />
      </instancedMesh>
      
      <instancedMesh ref={strand2Ref} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <primitive object={glassMaterial} attach="material" />
      </instancedMesh>

      {/* DNA Bridges (Base pairs) */}
      <instancedMesh ref={bridgesRef} args={[undefined, undefined, count]}>
        <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
        <primitive object={bridgeMaterial} attach="material" />
      </instancedMesh>

      {/* Adding ambient and point lights specifically to illuminate the internal bioluminescence */}
      <pointLight position={[0, 0, 0]} color="#ff1a1a" intensity={5} distance={10} />
      <pointLight position={[0, 5, 0]} color="#ffffff" intensity={2} />
      <pointLight position={[0, -5, 0]} color="#ff1a1a" intensity={3} />
    </group>
  );
}
