"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment, Text } from "@react-three/drei";

const Scene = () => {
  return (
    // backgroundImage: 'linear-gradient(to bottom, #2d3748, #1a202c)'
    <Canvas style={{ backgroundColor: "transparent" }}>
      <Text fontSize={1.05} font="/Geist-Black.otf" position={[0, 0, -0.95]}>Don&apos;t drink</Text>
      <Text fontSize={0.8} font="/Geist-Black.otf" position={[0, -0.8, -0.95]}>and drive</Text>
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment preset="city" />
      <Model />
    </Canvas>
  );
};

export default Scene;
