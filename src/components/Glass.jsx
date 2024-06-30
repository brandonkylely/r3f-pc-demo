import { useRef } from "react";
import { useControls } from "leva";

const Glass = (props) => {
  const meshRef = useRef();
  const materialProps = useControls({
    opacity: { value: 0.15, min: 0, max: 1 },
    transparent: { value: true },
    reflectivity: { value: 0.5, min: 0, max: 1 },
    metalness: { value: 1, min: 0, max: 1 },
    thickness: { value: 5, min: 0, max: 20 },
    roughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
    clearcoat: { value: 1, min: 0, max: 1, step: 0.1 },
  });

  return (
    <mesh ref={meshRef} {...props}>
      <planeGeometry args={[1, 1]} />
      <meshPhysicalMaterial {...materialProps} />
    </mesh>
  );
};

export default Glass;
