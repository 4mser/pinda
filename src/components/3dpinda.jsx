'use client'
import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import * as THREE from 'three';
import { Physics, RigidBody } from '@react-three/rapier';

function Bottle({ setObjectNames, position, rotation }) {
  const materials = useLoader(MTLLoader, '/models/bottle.mtl');
  const obj = useLoader(OBJLoader, '/models/bottle.obj', (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  const texture = useLoader(THREE.TextureLoader, '/images/etiquetajazmin.png');
  const ref = useRef();

  useEffect(() => {
    const names = [];
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        names.push(child.name || 'Unnamed');
        switch (child.name) {
          case 'Beer_Bottle':
            child.material = new THREE.MeshPhysicalMaterial({
              color: '#7A4123', // Ámbar
              roughness: 0.1,
              metalness: 0.2,
              transmission: 0.9, // Para hacerlo semitransparente
              transparent: true,
              opacity: 0.7,
              thickness: 0.5,
            });
            break;
          case 'Water_Bubles':
            child.material = new THREE.MeshStandardMaterial({
              color: '#F7F4F0',
              roughness: 0.05,
              metalness: 0.2,
              transparent: true,
              opacity: 0,
            });
            break;
          case 'Beer':
            child.material = new THREE.MeshPhysicalMaterial({
              color: '#FFD700', // Dorado
              roughness: 0.2,
              metalness: 0.6,
              clearcoat: 1.0,
              clearcoatRoughness: 0.1,
              sheen: 0.5,
              transmission: 0.9,
              thickness: 0.2,
            });
            break;
          case 'Bottle_Cap':
            child.material = new THREE.MeshStandardMaterial({
              color: 'gold',
              roughness: 0.3,
              metalness: 0.8,
            });
            break;
          case 'Label':
            child.material = new THREE.MeshBasicMaterial({
              map: texture,
              transparent: true,
            });
            break;
        }
      }
    });
    setObjectNames(names);
  }, [obj, setObjectNames, texture]);

  useEffect(() => {
    if (ref.current) {
      const box = new THREE.Box3().setFromObject(ref.current);
      const center = new THREE.Vector3();
      box.getCenter(center);
      ref.current.position.sub(center);

      const size = new THREE.Vector3();
      box.getSize(size);
      const maxAxis = Math.max(size.x, size.y, size.z);
      ref.current.scale.setScalar(4 / maxAxis);
    }
  }, [obj]);

  useFrame(() => {
    if (ref.current) {
      ref.current.position.set(position.x, position.y, position.z);
      ref.current.rotation.set(rotation.x, rotation.y, rotation.z);
    }
  });

  return (
    <RigidBody type="fixed">
      <group ref={ref}>
        <primitive object={obj} />
      </group>
    </RigidBody>
  );
}

function Controls() {
  return (
    <OrbitControls
      target={[0, 0, 0]}
      enableDamping
      dampingFactor={0.1}
      rotateSpeed={0.5}
      minDistance={2}
      maxDistance={10}
    />
  );
}

export default function Pinda3d() {
  const [objectNames, setObjectNames] = useState([]);
  const [position, setPosition] = useState({ x: -1, y: -2, z: 0 });
  const [rotation, setRotation] = useState({ x: -2, y: 0.4, z: 0 });

  const handlePositionChange = (axis, value) => {
    setPosition((prev) => ({ ...prev, [axis]: parseFloat(value) }));
  };

  const handleRotationChange = (axis, value) => {
    setRotation((prev) => ({ ...prev, [axis]: parseFloat(value) }));
  };

  return (
    <div className='h-[100dvh]'>
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <Physics>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight position={[15, 20, 5]} angle={0.3} penumbra={1} intensity={2} castShadow />
          <Bottle setObjectNames={setObjectNames} position={position} rotation={rotation} />
          <Controls />
          <Environment preset="sunset" />
        </Physics>
      </Canvas>
      <div className="controls">
        <div>
          <h2>Position</h2>
          <label>
            X: <input type="number" value={position.x} onChange={(e) => handlePositionChange('x', e.target.value)} />
          </label>
          <label>
            Y: <input type="number" value={position.y} onChange={(e) => handlePositionChange('y', e.target.value)} />
          </label>
          <label>
            Z: <input type="number" value={position.z} onChange={(e) => handlePositionChange('z', e.target.value)} />
          </label>
        </div>
        <div>
          <h2>Rotation</h2>
          <label>
            X: <input type="number" value={rotation.x} onChange={(e) => handleRotationChange('x', e.target.value)} />
          </label>
          <label>
            Y: <input type="number" value={rotation.y} onChange={(e) => handleRotationChange('y', e.target.value)} />
          </label>
          <label>
            Z: <input type="number" value={rotation.z} onChange={(e) => handleRotationChange('z', e.target.value)} />
          </label>
        </div>
      </div>
      <div className="object-names">
        <h2>Nombres de las capas:</h2>
        <ul>
          {objectNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .controls {
          position: absolute;
          top: 200px;
          left: 10px;
          background: rgba(255, 255, 255, 0.8);
          padding: 10px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        .controls div {
          margin-bottom: 10px;
        }
        .controls label {
          display: block;
          margin-bottom: 5px;
        }
        .controls input {
          width: 60px;
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
}
