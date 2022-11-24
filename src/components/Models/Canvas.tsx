import { Box } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CustomScene from "./Scene";
import Loader from "./Loader";

export default function SceneCanvas() {
  return (
    <Box
      top={0}
      left={0}
      zIndex={0}
      opacity={0.6}
      // filter="invert(1)"
      w="100vw"
      h="100vh"
      position="absolute"
    >
      <Canvas style={{ position: "absolute", zIndex: 0 }} dpr={[1, 2]}>
        <Suspense fallback={<Loader />}>
          <CustomScene />
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </Box>
  );
}
