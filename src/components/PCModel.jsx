import { useState } from "react";
import pc from "/assets/pcopen.glb";
import { OrbitControls, useGLTF } from "@react-three/drei";

function PCModel(props) {
  const [url, setUrl] = useState(pc);
  const { scene } = useGLTF(url);

  return <primitive object={scene} scale={2} position={[0, -0.1, 0]} />;
}

export default PCModel;
