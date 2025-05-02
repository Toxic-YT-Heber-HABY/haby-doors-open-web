
import { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

interface ModelProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

function Model({ modelPath, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: ModelProps) {
  const ref = useRef<THREE.Group>(null);
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
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={meshRef}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2, 0.4, 0.1]} />
          <meshStandardMaterial color="#7E69AB" metalness={0.2} roughness={0.3} />
        </mesh>
        <mesh position={[-0.6, 0, 0.06]} castShadow>
          <boxGeometry args={[0.1, 0.6, 0.1]} />
          <meshStandardMaterial color="#7E69AB" metalness={0.2} roughness={0.3} />
        </mesh>
        <mesh position={[0.6, 0, 0.06]} castShadow>
          <boxGeometry args={[0.1, 0.6, 0.1]} />
          <meshStandardMaterial color="#7E69AB" metalness={0.2} roughness={0.3} />
        </mesh>
        <Text
          position={[0, 0.7, 0]}
          fontSize={0.3}
          color="#7E69AB"
          anchorX="center"
          anchorY="middle"
        >
          HABY
        </Text>
      </group>
    </Float>
  );
}

// Custom environment to replace the HDR environment
function CustomEnvironment() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <hemisphereLight args={['#f8f9fa', '#7E69AB', 0.7]} />
    </>
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

export default function ThreeDModel({ 
  type = 'logo', 
  modelPath = '/lovable-uploads/haby_logo_3d.glb', 
  scale, 
  position, 
  rotation, 
  className 
}: ThreeDModelProps) {
  return (
    <div className={`w-full h-full ${className || ''}`} style={{ minHeight: '300px' }}>
      <Canvas shadows dpr={[1, 2]}>
        <color attach="background" args={['#f8f9fa']} />
        <fog attach="fog" args={['#f8f9fa', 5, 20]} />
        
        {/* Replaced Environment component with CustomEnvironment */}
        <CustomEnvironment />
        
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
        
        {type === 'logo' ? (
          <LogoModel />
        ) : (
          <Model 
            modelPath={modelPath} 
            scale={scale} 
            position={position} 
            rotation={rotation} 
          />
        )}
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
          autoRotate
          autoRotateSpeed={1}
        />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
          <planeGeometry args={[50, 50]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      </Canvas>
    </div>
  );
}
