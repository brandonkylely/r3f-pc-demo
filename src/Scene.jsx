import { OrbitControls } from "@react-three/drei";
import PCModel from "./components/PCModel";
import Glass from "./components/Glass";
import { Environment } from "@react-three/drei";

function Scene() {
  return (
    <>
      <Environment preset="sunset" background />
        <PCModel />
        <Glass />
      <OrbitControls />
      <ambientLight intensity={1} />
      <directionalLight intensity={1} position={[0, 1, -2]} />
    </>
  );
}

export default Scene;
