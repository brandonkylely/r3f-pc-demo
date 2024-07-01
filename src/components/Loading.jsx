import { useProgress, Html } from "@react-three/drei";

export default function Loading() {
  const { progress } = useProgress();
  return (
    <Html wrapperClass="loading" center>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <br />
      {Math.round(progress)} % Loaded
    </Html>
  );
}
