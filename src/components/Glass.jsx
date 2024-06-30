import { useRef } from "react";
import { useControls } from "leva";

const Glass = (props) => {
  const meshRef = useRef();
  // const materialProps = useControls({
  //   opacity: { value: 0.3, min: 0, max: 1 },
  //   transparent: { value: true },
  //   reflectivity: { value: 0.5, min: 0, max: 1 },
  //   metalness: { value: 1, min: 0, max: 1 },
  //   thickness: { value: 5, min: 0, max: 20 },
  //   roughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
  //   clearcoat: { value: 1, min: 0, max: 1, step: 0.1 },
  // });
  const materialProps = {
    opacity: 0.3,
    transparent: true,
    reflectivity: 0.5,
    metalness: 1,
    thickness: 5,
    roughness: 0.1,
    clearcoat: 1,
  };

  return (
    <mesh ref={meshRef} {...props} position={[0.03, -0.085, 0.215]}>
      <planeGeometry args={[1.337, 1.033]} />
      <meshPhysicalMaterial {...materialProps} />
    </mesh>
  );
};

export default Glass;
