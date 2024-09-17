import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
<<<<<<< HEAD
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
=======
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
>>>>>>> 9d3c5be (Initial commit)
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
