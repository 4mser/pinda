switch (child.name) {
    case 'botella':
      child.material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0xAA6220),
        metalness: 0.1,
        roughness: 0.5,
        clearcoat: 1,
        clearcoatRoughness: 0,
        transmission: 1,
        opacity: 1,
        transparent: true,
        reflectivity: 0.2,
      });
      break;
    case 'etiqueta':
      child.material = new THREE.MeshStandardMaterial({
        map: child.material.map,
        roughness: 0.3,
        metalness: 0.01,
        transparent: true,
        opacity: 1,
        alphaTest: 0.5, // Esto asegurará que las áreas transparentes no sean renderizadas
      });
      break;
      case 'etiqueta2':
      child.material = new THREE.MeshStandardMaterial({
        map: child.material.map,
        roughness: 0.3,
        metalness: 0.01,
        transparent: true,
        opacity: 0,
        alphaTest: 0.5, // Esto asegurará que las áreas transparentes no sean renderizadas
      });
      break;
      case 'etiqueta3':
      child.material = new THREE.MeshStandardMaterial({
        map: child.material.map,
        roughness: 0.3,
        metalness: 0.01,
        transparent: true,
        opacity: 0,
        alphaTest: 0.5, // Esto asegurará que las áreas transparentes no sean renderizadas
      });
      break;
    case 'liquido':
      child.material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0xD1A952),
        metalness: 0,
        roughness: 0.2,
        transmission: 1,
        opacity: 1,
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