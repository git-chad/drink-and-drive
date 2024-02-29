import React, { useRef } from "react";
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

const Model = () => {
  const { nodes } = useGLTF("/torus.glb");
  const { viewport } = useThree();
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x = 0.6;
    mesh.current.rotation.z = 0.5;
    mesh.current.position.y = 1.2;
  });

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 1, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 2 },
    backside: { value: true },
  });

  return (
    <group ref={mesh} scale={viewport.width / 40}>
      <mesh {...nodes.Can}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      <mesh {...nodes.tab}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};

export default Model;
