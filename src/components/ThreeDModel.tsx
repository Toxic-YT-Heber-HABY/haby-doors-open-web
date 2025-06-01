
import { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera, Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useDeviceCapabilities } from '@/hooks/useDeviceCapabilities';
import MobileOptimizedVisual from './MobileOptimizedVisual';
import ThreeDModelFallback from './ThreeDModelFallback';

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
  type?: 'logo' | 'door' | 'text';
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
  const capabilities = useDeviceCapabilities();
  const [renderError, setRenderError] = useState(false);

  // Si el dispositivo no puede manejar 3D o es móvil, usar versión optimizada
  if (capabilities.preferredRenderMode === 'static' || capabilities.isMobile) {
    return (
      <div className={`w-full h-full ${className || ''}`} style={{ minHeight: '300px' }}>
        <MobileOptimizedVisual type={type} />
      </div>
    );
  }

  // Si hay un error de renderizado, usar fallback
  if (renderError || capabilities.preferredRenderMode === 'fallback') {
    return (
      <div className={`w-full h-full ${className || ''}`} style={{ minHeight: '300px' }}>
        <ThreeDModelFallback type={type} />
      </div>
    );
  }

  // Solo renderizar 3D real en dispositivos de alta capacidad
  if (capabilities.preferredRenderMode === '3d') {
    return (
      <div className={`w-full h-full ${className || ''}`} style={{ minHeight: '300px' }}>
        <Suspense fallback={<MobileOptimizedVisual type={type} />}>
          <Canvas 
            shadows 
            dpr={[1, Math.min(2, capabilities.performanceLevel === 'high' ? 2 : 1.5)]}
            onError={() => setRenderError(true)}
          >
            <color attach="background" args={['#f8f9fa']} />
            <fog attach="fog" args={['#f8f9fa', 5, 20]} />
            
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
        </Suspense>
      </div>
    );
  }

  // Fallback por defecto
  return (
    <div className={`w-full h-full ${className || ''}`} style={{ minHeight: '300px' }}>
      <MobileOptimizedVisual type={type} />
    </div>
  );
}
