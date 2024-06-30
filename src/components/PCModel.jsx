import { useState } from 'react'
import pc from '../assets/pc.glb'
import { OrbitControls, useGLTF } from '@react-three/drei'


function PCModel(props) {

  const [url, setUrl] = useState(pc);

  function Model({ url }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
  }

  return (
    <group position={props.position}>
      {/* <OrbitControls> */}
      {/* <ambientLight intensity={0.5} /> */}
      {/* <directionalLight intensity={0.5} position={[0, 10, 0]} /> */}
        <Model url={url} scale={3}/>
      {/* </OrbitControls> */}
    </group>
  )
}

export default PCModel;
