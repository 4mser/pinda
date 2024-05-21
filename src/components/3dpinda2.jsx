'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Sky, Effects } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Definir constantes para la posición, rotación y escala
const MODEL_POSITION = [-0.7, -2.5, 0]; // [x, y, z]
const MODEL_ROTATION = [0, 1, -0.4]; // [x, y, z] en radianes
const MODEL_SCALE = [2, 2, 2]; // [x, y, z] para la escala del modelo

const MouseControls = () => {
  const { camera } = useThree();
  const ref = useRef();
  
  useEffect(() => {
    const target = new THREE.Vector3();
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) * 2 - 1;
      const y = -(clientY / innerHeight) * 2 + 1;
      
      target.x = x * 0.5;
      target.y = y * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (ref.current) {
        ref.current.target.lerp(target, 0.05); // Ajusta este valor para una latencia más alta (más suave)
        ref.current.update();
      }
      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <OrbitControls ref={ref} enableZoom={false} />;
};

const Pinda3d = () => {
  const { scene } = useGLTF('/models/jazmin4.glb');
  const [componentNames, setComponentNames] = useState([]);

  useEffect(() => {
    const names = [];

    if (scene) {
      scene.position.set(...MODEL_POSITION);
      scene.rotation.set(...MODEL_ROTATION);
      scene.scale.set(...MODEL_SCALE);

      scene.traverse((child) => {
        if (child.isMesh) {
          names.push(child.name);

          switch (child.name) {
            case 'botella':
              child.material = new THREE.MeshPhysicalMaterial({
                color: new THREE.Color(0xAA6220),
                metalness: 0.4,
                roughness: 0.5,
                clearcoat: 1,
                clearcoatRoughness: 0.1,
                transmission: 0.9,
                opacity: 0.9,
                transparent: true,
                reflectivity: 0.5,
              });
              break;
            case 'etiqueta':
              child.material = new THREE.MeshStandardMaterial({
                map: child.material.map,
                roughness: 0.5,
                metalness: 0,
                transparent: true,
                opacity: 1,
                alphaTest: 0.5, // Esto asegurará que las áreas transparentes no sean renderizadas
              });
              break;
            case 'liquido':
              child.material = new THREE.MeshPhysicalMaterial({
                color: new THREE.Color(0xffe070),
                metalness: 0,
                roughness: 0.2,
                transmission: 1,
                opacity: 0.9,
                transparent: true,
                reflectivity: 0.5,
              });
             
              case 'tapa':
                child.material = new THREE.MeshStandardMaterial({
                  color: new THREE.Color(0x1f8ea3), // Azul metálico
                  metalness: 1,
                  roughness: 0.3,
                  reflectivity: 0.5,
                });
                break;
              default:
                break;
            }
        }
      });
      setComponentNames(names);
    }
  }, [scene]);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Canvas style={{ height: '100vh', width: '100%' }}>
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={0.5}
          castShadow
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
        />
        <pointLight position={[-10, -10, -10]} intensity={1.5} />
        <Sky
          distance={4500}
          sunPosition={[-100, 40, -100]}
          inclination={0.5}
          azimuth={0.25}
          turbidity={1} // Reducir la turbidez para un cielo más claro
          rayleigh={3} // Aumentar el scattering de Rayleigh para un cielo más azul y claro
          mieCoefficient={0.5}
          mieDirectionalG={0.01}
        />
        <Environment preset="forest" />
        <primitive object={scene} />
        <MouseControls />
        <EffectComposer>
          <Bloom
            intensity={0.2} // Intensidad del efecto bloom
            width={300} // Ancho de la convolución del bloom
            height={300} // Alto de la convolución del bloom
            kernelSize={3} // Tamaño del kernel del bloom
            luminanceThreshold={0.15} // Umbral de luminancia para el bloom
            luminanceSmoothing={0.025} // Suavizado de luminancia para el bloom
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Pinda3d;
