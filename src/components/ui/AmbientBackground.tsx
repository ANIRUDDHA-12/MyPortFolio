"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { BakeShadows } from "@react-three/drei";
import * as THREE from "three";

const GridParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate flat dot-matrix grid
  const count = 3000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 40;
      const z = (Math.random() - 0.5) * 40;
      const y = 0; // Flat plane initially
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const x = positionsArray[i * 3];
      const z = positionsArray[i * 3 + 2];
      // Smooth Math.sin() wave based on x, z coordinates and time
      positionsArray[i * 3 + 1] = Math.sin(x * 0.5 + time) * 0.5 + Math.cos(z * 0.5 + time) * 0.5;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} rotation={[-Math.PI / 3, 0, 0]} position={[0, -2, -5]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#F59E0B"
        transparent
        opacity={0.15}
        sizeAttenuation
      />
    </points>
  );
};

export const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none w-full h-screen bg-[#0A0A0A]">
      <Suspense fallback={null}>
        <Canvas dpr={1} camera={{ position: [0, 0, 5], fov: 75 }}>
          <BakeShadows />
          <GridParticles />
        </Canvas>
      </Suspense>
    </div>
  );
};
