'use client'
import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'gsap';

const MODEL_POSITION = [-1, -2.5, 0];
const MODEL_ROTATION = [0.2, 1.2, -0.5];
const MODEL_SCALE = [2.5, 2.5, 2.5];

const AnimatedModel = ({ scene, rotation }) => {
  const animatedScene = useRef(scene);

  useEffect(() => {
    if (animatedScene.current) {
      animatedScene.current.position.set(...MODEL_POSITION);
      animatedScene.current.rotation.set(...MODEL_ROTATION);
      animatedScene.current.scale.set(...MODEL_SCALE);
    }
  }, [scene]);

  return (
    <primitive object={animatedScene.current} rotation={rotation} />
  );
};

const PindaBottle = () => {
  const [scene, setScene] = useState(null);
  const [visibleLabel, setVisibleLabel] = useState('etiqueta');
  const modelRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const loadModel = async () => {
      try {
        const gltf = await new GLTFLoader().loadAsync('/models/reishi.glb');
        setScene(gltf.scene);
      } catch (error) {
        console.error('Error loading GLTF model:', error);
      }
    };

    loadModel();
  }, []);

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          switch (child.name) {
            case 'botella':
              child.material = new THREE.MeshPhysicalMaterial({
                color: new THREE.Color(0x6A4111),
                metalness: 0.1,
                roughness: 0.8,
                clearcoat: 1,
                clearcoatRoughness: 0,
                transmission: 1,
                opacity: 1,
                transparent: true,
                reflectivity: 0.2,
              });
              break;
            case 'etiqueta':
            case 'etiqueta2':
            case 'etiqueta3':
              child.visible = (child.name === visibleLabel);
              child.material = new THREE.MeshStandardMaterial({
                map: child.material.map,
                roughness: 0.5,
                metalness: 0.1,
                opacity: child.name === visibleLabel ? 1 : 0, // Fade effect
                alphaTest: 0.5,
              });
              break;
            case 'liquido':
              child.material = new THREE.MeshPhysicalMaterial({
                color: new THREE.Color(0x97836C),
              });
              break;
            case 'tapa':
              child.material = new THREE.MeshStandardMaterial({
                color: new THREE.Color(0x1f8ea3),
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
      modelRef.current = scene;
    }
  }, [scene, visibleLabel]);

  useEffect(() => {
    // Establecer el fondo por defecto al cargar
    gsap.set(canvasRef.current.style, { backgroundImage: getBackgroundColor('etiqueta') });
  }, []);

  const handleLabelChange = (label) => {
    const currentRotation = modelRef.current.rotation;
    
    // Iniciar la animación de rotación de la botella
    gsap.to(modelRef.current.rotation, { y: currentRotation.y + Math.PI * 2, duration: 1, ease: "power2.inOut" });
    
    // Cambio de etiqueta con un retardo
    setTimeout(() => {
      setVisibleLabel(label);
    }, 500); // 0.5 segundos de retardo

    // Cambio de fondo con GSAP
    const newBackgroundColor = getBackgroundColor(label);
    gsap.to(canvasRef.current.style, { backgroundImage: newBackgroundColor, duration: 1, ease: "power2.inOut" });
  };

  const getBackgroundColor = (label) => {
    switch (label) {
      case 'etiqueta':
        return 'linear-gradient(to bottom, #F4FFFF, #D3FEFF)'; // Celeste pastel
      case 'etiqueta2':
        return 'linear-gradient(to bottom, #FFF07F, #D9FEFF)'; // Amarillo pastel
      case 'etiqueta3':
        return 'linear-gradient(to bottom, #FFD1E8, #FFF7FB)'; // Rosa pastel
      default:
        return 'linear-gradient(to bottom, #a1c4fd, #c2e9fb)'; // Default to celeste pastel
    }
  };

  return (
    <main className='relative'>
        <Canvas ref={canvasRef} style={{width: '100vw', height:'550px', marginTop:'6rem'}}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <Suspense fallback={null}>
            {scene && <AnimatedModel scene={scene} rotation={modelRef.current?.rotation || [0, 0, 0]} />}
          </Suspense>
          <OrbitControls enableZoom={false} />
          <Environment preset='forest' />
        </Canvas>
        <div className="absolute top-28 right-4 flex space-y-4 flex-col">
          <button 
            className="px-4 py-2 bg-blue-200 text-white text-sm rounded-full hover:scale-110 transition-all" 
            onClick={() => handleLabelChange('etiqueta')}
          >
            Jazmín y Melena de León
          </button>
          <button 
            className="px-4 py-2 bg-yellow-200 text-white text-sm rounded-full hover:scale-110 transition-all" 
            onClick={() => handleLabelChange('etiqueta2')}
          >
            Limón-Jengibre y Cordyceps
          </button>
          <button 
            className="px-4 py-2 bg-pink-200 text-white text-sm rounded-full hover:scale-110 transition-all" 
            onClick={() => handleLabelChange('etiqueta3')}
          >
            Flor de Jamaica, Rooibos y Reishi
          </button>
        </div>
    </main>
  );
};

export default PindaBottle;
