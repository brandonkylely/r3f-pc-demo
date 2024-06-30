import { OrbitControls, Environment } from "@react-three/drei";
import PCModel from "./components/PCModel";
import Glass from "./components/Glass";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Scene() {
  // rotate scene
  const groupRef = useRef();
  useFrame((clock) => {
    groupRef.current.rotation.y = Math.sin(clock.clock.elapsedTime / 6) / 3;
  });

  return (
    <>
      <Environment preset="sunset" background />
      <OrbitControls />
      <group position={[0, 0, 0]} ref={groupRef}>
        <PCModel />
        <Glass />
        <ambientLight intensity={0.05} />
        <pointLight position={[-0.1, 0.25, 0]} intensity={0.6} color={"red"} />
        <pointLight position={[0.1, 0.1, 0]} intensity={0.4} color={"blue"} />
      </group>
    </>
  );
}

export default Scene;
