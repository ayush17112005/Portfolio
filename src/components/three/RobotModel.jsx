import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useAnimations,
  OrbitControls,
  Html,
  Float,
} from "@react-three/drei";

// ROBOT COMPONENT
const Robot = () => {
  const group = useRef();

  const { scene, animations } = useGLTF("/models/source/RobotExpressive.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play Wave animation on loop
    if (actions["Wave"]) {
      actions["Wave"].reset().play();
      actions["Wave"].setLoop(true);
      actions["Wave"].timeScale = 0.8;
    }
  }, [actions]);

  return (
    <group
      ref={group}
      position={[0, -1.5, 0]}
      scale={0.55}
      rotation={[0, 0, 0]}
    >
      <primitive object={scene} />
    </group>
  );
};

// LOADING SPINNER
const LoadingFallback = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[0.3, 0.1, 16, 32]} />
      <meshStandardMaterial color="#1A73E8" />
    </mesh>
  );
};

// MAIN CANVAS
const RobotModel = () => {
  return (
    <Canvas
      camera={{ position: [0, 1, 5], fov: 40 }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} />
      <directionalLight position={[-5, 5, 5]} intensity={0.5} />
      <pointLight position={[0, 5, 0]} intensity={0.3} />

      {/* Robot */}
      <Suspense fallback={<LoadingFallback />}>
        <Robot />
      </Suspense>

      {/* ORBIT CONTROLS - Allows mouse rotation */}
      <OrbitControls
        enableZoom={false} // Disable scroll zoom
        enablePan={false} // Disable panning
        enableRotate={true} // Enable rotation with mouse
        minPolarAngle={Math.PI / 4} // Limit vertical rotation (top)
        maxPolarAngle={Math.PI / 1.8} // Limit vertical rotation (bottom)
        minAzimuthAngle={-Math.PI / 4} // Limit horizontal rotation (left)
        maxAzimuthAngle={Math.PI / 4} // Limit horizontal rotation (right)
        rotateSpeed={0.5} // Slower rotation for smoother feel
      />
    </Canvas>
  );
};

useGLTF.preload("/models/source/RobotExpressive.glb");

export default RobotModel;
