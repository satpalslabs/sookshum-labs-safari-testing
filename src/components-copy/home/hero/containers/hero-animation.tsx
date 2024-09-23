"use client";
// Model.tsx
import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/home/hero/scene.glb"); 
  const meshRef = useRef<any>(null!);

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      <primitive object={gltf.scene} />
    </group>
  );
};

export default Model;
