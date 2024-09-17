<<<<<<< HEAD
import { OrbitControls } from "@react-three/drei";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
=======
import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar"
import { useControls } from "leva";
export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Talking", "Dancing", "Walking"],
    },
  })
  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <Avatar animation={animation} />
        {
          animation === "Typing" && (
            <mesh
              scale={[0.8, 0.5, 0.8]}
              position-y={0.25}
            >
              <boxGeometry />
              <meshStandardMaterial color={"teal"} />
            </mesh>
          )
        }

        <mesh
          receiveShadow
          scale={5}
          rotation-x={-Math.PI * 0.5}
        >
          <planeGeometry />
          <meshStandardMaterial color={"white"} />
        </mesh>
      </group>
>>>>>>> 9d3c5be (Initial commit)
    </>
  );
};
