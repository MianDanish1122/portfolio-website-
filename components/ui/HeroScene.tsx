"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function AnimatedMesh({ reducedMotion }: { reducedMotion: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    if (!reducedMotion) {
      meshRef.current.rotation.x += delta * 0.08;
      meshRef.current.rotation.y += delta * 0.12;
    }

    const targetX = state.pointer.y * 0.25;
    const targetY = state.pointer.x * 0.25;

    pointer.current.x += (targetX - pointer.current.x) * 0.05;
    pointer.current.y += (targetY - pointer.current.y) * 0.05;

    meshRef.current.rotation.x += pointer.current.x * delta;
    meshRef.current.rotation.y += pointer.current.y * delta;
  });

  return (
    <Icosahedron ref={meshRef} args={[1.6, 6]}>
      <MeshDistortMaterial
        color="#3b82f6"
        emissive="#06b6d4"
        emissiveIntensity={0.35}
        roughness={0.15}
        metalness={0.6}
        distort={0.35}
        speed={reducedMotion ? 0 : 1.2}
        wireframe
      />
    </Icosahedron>
  );
}

export default function HeroScene() {
  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 4]} intensity={1.2} color="#3b82f6" />
      <directionalLight position={[-3, -2, -4]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[0, 0, 3]} intensity={0.6} color="#06b6d4" />
      <AnimatedMesh reducedMotion={reducedMotion} />
    </Canvas>
  );
}
