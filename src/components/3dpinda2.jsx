'use client';

import React, { useRef, useEffect, Suspense, useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Plane } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MODEL_POSITION = [-0.1, 2.8, 0];
const MODEL_ROTATION = [0, 1, -0.2];
const MODEL_SCALE = [0.3, 0.3, 0.3];

const GradientBackground = () => {
  const planeRef = useRef();

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform vec3 topColor;
    uniform vec3 bottomColor;
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(mix(bottomColor, topColor, vUv.y), 1.0);
    }
  `;

  const uniforms = useMemo(() => ({
    topColor: { value: new THREE.Color('#ffffff') },
    bottomColor: { value: new THREE.Color('#e0ffff') }
  }), []);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      }
    });

    timeline
      .to(uniforms.topColor.value, { r: 1, g: 1, b: 1, duration: 2 })
      .to(uniforms.bottomColor.value, { r: 0.878, g: 1, b: 1, duration: 2 })
      .to(uniforms.topColor.value, { r: 1, g: 1, b: 0.878, duration: 2 })
      .to(uniforms.bottomColor.value, { r: 1, g: 0.843, b: 0, duration: 2 })
      .to(uniforms.topColor.value, { r: 1, g: 0.878, b: 1, duration: 2 })
      .to(uniforms.bottomColor.value, { r: 0.937, g: 0.878, b: 1, duration: 2 });
  }, [uniforms]);

  return (
    <Plane 
      ref={planeRef} 
      args={[100, 100]} 
      position={[0, 0, -10]}
    >
      <shaderMaterial 
        attach="material" 
        vertexShader={vertexShader} 
        fragmentShader={fragmentShader} 
        uniforms={uniforms} 
      />
    </Plane>
  );
};

const Pinda3d = () => {
  const [scene, setScene] = useState(null);
  const modelRef = useRef();
  const textRefs = useRef([]);
  const etiquetaRefs = useRef([]);

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
      scene.position.set(...MODEL_POSITION);
      scene.rotation.set(...MODEL_ROTATION);
      scene.scale.set(...MODEL_SCALE);

      scene.traverse((child) => {
        if (child.isMesh) {
          const materialSettings = getMaterialSettings(child.name);
          if (materialSettings) {
            child.material = new THREE[materialSettings.type](materialSettings.properties);
            if (child.name.includes('etiqueta')) {
              etiquetaRefs.current.push(child);
            }
          }
        }
      });
      modelRef.current = scene;
    }
  }, [scene]);

  useEffect(() => {
    if (modelRef.current) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#scroll-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        }
      });

      timeline
        .to(modelRef.current.position, { x: -0.2, y: 0.7, duration: 2 })
        .to(modelRef.current.rotation, { x: 0, y: 2, z: -0.2, duration: 2 }, "-=2")
        .to(modelRef.current.scale, { x: 0.6, y: 0.6, z: 0.6, duration: 2 }, "-=2")
        .to(modelRef.current.position, { x: 0, y: -1.5, duration: 2 })
        .to(modelRef.current.rotation, { x: -0.4, y: -5.7, z: -0.4, duration: 2 }, "-=2")
        .to(etiquetaRefs.current[0].material, { opacity: 0, duration: 1 }, "-=2")
        .to(etiquetaRefs.current[1].material, { opacity: 1, duration: 1 }, "-=2")
        .to(modelRef.current.position, { x: 0.3, y: -3.5, duration: 2 })
        .to(modelRef.current.rotation, { x: -1, y: 1, z: 0.7, duration: 2 }, "-=2")
        .to(etiquetaRefs.current[1].material, { opacity: 0, duration: 1 }, "-=2")
        .to(etiquetaRefs.current[2].material, { opacity: 1, duration: 1 }, "-=2");

      textRefs.current.forEach((textRef, index) => {
        gsap.to(textRef, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textRef,
            start: "top 75%",
            end: "bottom 25%",
            scrub: true,
          }
        });
      });
    }
  }, [scene, etiquetaRefs]);

  return (
    <div id="scroll-container" style={{ position: 'relative', width: '100%', height: '600vh' }}>
      <Canvas style={{ height: '600vh', width: '100%' }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Environment preset='forest' />
        <Suspense fallback={null}>
          {scene && <primitive object={scene} />}
          <GradientBackground />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
      {["", "NUEVA LÍNEA FUNCIONAL", "", "", "", ""].map((text, index) => (
        <div
          key={index}
          ref={el => textRefs.current[index] = el}
          style={{
            position: 'absolute',
            top: `${100 + index * 80}vh`,
            left: index % 3 === 0 ? '10%' : '80%',
            transform: 'translate(-50%, -50%)',
            fontWeight: 'bold',
            fontSize: '3rem',
            opacity: 0,
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
          }}
        >
          <h1 className='left-0 text-pindablack'>{text}</h1>
        </div>
      ))}
    </div>
  );
};

const getMaterialSettings = (name) => {
  switch (name) {
    case 'botella':
      return {
        type: 'MeshPhysicalMaterial',
        properties: {
          color: new THREE.Color(0xAA6220),
          metalness: 0.1,
          roughness: 0.8,
          clearcoat: 1,
          clearcoatRoughness: 0,
          transmission: 1,
          opacity: 1,
          transparent: true,
          reflectivity: 0.2,
        }
      };
    case 'etiqueta':
      return {
        type: 'MeshStandardMaterial',
        properties: {
          map: new THREE.TextureLoader().load('/path/to/texture1.jpg'),
          roughness: 0.5,
          metalness: 0.01,
          transparent: true,
          opacity: 1,
          alphaTest: 0.5,
        }
      };
    case 'etiqueta2':
    case 'etiqueta3':
      return {
        type: 'MeshStandardMaterial',
        properties: {
          map: new THREE.TextureLoader().load('/path/to/texture2.jpg'),
          roughness: 0.5,
          metalness: 0.01,
          transparent: true,
          opacity: 0,
          alphaTest: 0.5,
        }
      };
    case 'liquido':
      return {
        type: 'MeshPhysicalMaterial',
        properties: {
          color: new THREE.Color(0x000000),
        }
      };
    case 'tapa':
      return {
        type: 'MeshStandardMaterial',
        properties: {
          color: new THREE.Color(0x1f8ea3),
          metalness: 1,
          roughness: 0.3,
          reflectivity: 0.5,
        }
      };
    default:
      return null;
  }
};

export default Pinda3d;
