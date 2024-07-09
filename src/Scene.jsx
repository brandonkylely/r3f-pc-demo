import { Environment } from "@react-three/drei";
import PCModel from "./components/PCModel";
import Glass from "./components/Glass";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useDrag } from "react-use-gesture";

function Scene() {
  // rotate scene
  const groupRef = useRef();
  useFrame((clock) => {
    groupRef.current.rotation.y = Math.sin(clock.clock.elapsedTime / 6) / 3;
  });

  const meshRef = useRef();
  const [rotation, setRotation] = useState([0, 0, 0]);

  // Use gesture for drag
  const bind = useDrag(({ offset: [x, y] }) => {
    setRotation([y / 100, x / 100, 0]);
  });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation[0];
      meshRef.current.rotation.y = rotation[1];
    }
  });

  return (
    <group position={[-2.3, 0, -0.8]} ref={meshRef} {...bind()} onClick={() => console.log('Object clicked!')}>
      <Environment preset="sunset" background={false} />
      <group position={[0, 0, 0]} ref={groupRef}>
        <PCModel />
        <Glass />
        <ambientLight intensity={0.05} />
        <pointLight position={[-0.1, 0.25, 0]} intensity={0.6} color={"red"} />
        <pointLight position={[0.1, 0.1, 0]} intensity={0.4} color={"blue"} />
      </group>
    </group>
  );
}

export default Scene;
