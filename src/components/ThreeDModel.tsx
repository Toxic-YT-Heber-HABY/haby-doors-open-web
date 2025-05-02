
import { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

interface ModelProps {
  modelPath?: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

function Model({ modelPath = '/lovable-uploads/haby_logo_3d.glb', scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: ModelProps) {
  const ref = useRef<THREE.Mesh>(null);
  const { scene } = useGLTF(modelPath, true);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive 
      ref={ref}
      object={scene} 
      scale={scale} 
      position={position}
      rotation={rotation}
    />
  );
}

function LogoModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={4} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 0.4, 0.1]} />
        <meshStandardMaterial color="#7E69AB" />
        <mesh position={[-0.6, 0, 0.06]}>
          <boxGeometry args={[0.1, 0.6, 0.1]} />
          <meshStandardMaterial color="#7E69AB" />
        </mesh>
        <mesh position={[0.6, 0, 0.06]}>
          <boxGeometry args={[0.1, 0.6, 0.1]} />
          <meshStandardMaterial color="#7E69AB" />
        </mesh>
      </mesh>
    </Float>
  );
}

interface ThreeDModelProps {
  type?: 'logo' | 'custom';
  modelPath?: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  className?: string;
}

export default function ThreeDModel({ type = 'logo', modelPath, scale, position, rotation, ...props }: ThreeDModelProps) {
  return (
    <div className={`w-full h-full ${props.className || ''}`} style={{ minHeight: '300px' }}>
      <Canvas shadows>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <Environment preset="city" />
        
        {type === 'logo' ? (
          <LogoModel />
        ) : (
          <Model modelPath={modelPath} scale={scale} position={position} rotation={rotation} />
        )}
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
        />
      </Canvas>
    </div>
  );
}
