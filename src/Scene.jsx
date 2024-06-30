import { OrbitControls } from '@react-three/drei';
import PCModel from './components/PCModel';


function Scene() {
  return (
    <>
    {/* <OrbitControls> */}
      <PCModel position={[0, -0.6, 0]}/>
    {/* </OrbitControls> */}
      <ambientLight intensity={1} />
      <directionalLight intensity={1} position={[0, 1, 0]} />
    </>
  )
}

export default Scene;
