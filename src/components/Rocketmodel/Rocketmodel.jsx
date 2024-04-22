import React, { useState } from "react";
import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Euler } from "three";

const Rocketmodel = ({ initialOrientation }) => {
  const [orientation, setOrientation] = useState(initialOrientation || { x: 0, y: 0, z: 0 });
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
        <ambientLight intensity={5} />

        <OrbitControls
          enableRotate={false}
          enablePan={false}
          enableZoom={false} />
        <primitive
          object={scene}
          scale={[0.1*1.45, 0.1*1.45, 0.1*1.45]}
          rotation={euler}
          position={[0, 0, 0]}
        />
      </Canvas>
    </Box>
  );
};

Rocketmodel.defaultProps = {
  initialOrientation: { x: 0, y: 0, z: 0 }
};

export default Rocketmodel;
