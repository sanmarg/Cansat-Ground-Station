import React, { useState } from "react";
import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { MeshStandardMaterial, Euler } from "three";

const Rocketmodel = ({ orientation }) => {
  const { scene } = useGLTF("rocket.glb");

  const euler = new Euler(
    (orientation.x || 0) * (Math.PI / 180),
    (orientation.y || 0) * (Math.PI / 180),
    (orientation.z || 0) * (Math.PI / 180)
  );

  return (
    <Box
      sx={{
        width: "440px",
        height: "440px",
        border: "2px solid #000",
      }}
    >
      <Canvas
        className="cursor-pointer"
        frameloop="demand"
      >
        <ambientLight intensity={2} />

        <OrbitControls enableRotate={false} />
        <primitive
          object={scene}
          scale={[0.1, 0.1, 0.1]}
          rotation={euler}
        />
      </Canvas>
    </Box>
  );
};

export default Rocketmodel;
