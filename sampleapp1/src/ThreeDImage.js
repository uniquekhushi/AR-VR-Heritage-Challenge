// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import tajmahal from './tajmahal2.glb'
// const ThreeDImage = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Clear all existing cookies
//     document.cookie.split(";").forEach(function(c) {
//       document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
//     });

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     containerRef.current.appendChild(renderer.domElement);

//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableZoom = true;

//     const ambientLight = new THREE.AmbientLight(0x404040);
//     scene.add(ambientLight);

//     const pointLight = new THREE.PointLight(0xffffff, 1, 100);
//     pointLight.position.set(0, 0, 0);
//     scene.add(pointLight);

//     const loader = new GLTFLoader();
//     loader.load(
//       tajmahal,
//       (gltf) => {
//         const model = gltf.scene;
//         scene.add(model);
//       },
//       undefined,
//       (error) => {
//         console.error(error);
//       }
//     );

//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     };
//     animate();

//     return () => {
//       renderer.dispose();
//       containerRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div ref={containerRef} />;
// };

// export default ThreeDImage;
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import tajmahal from './tajmahal2.glb';

const ThreeDImage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Clear all existing cookies
    document.cookie.split(";").forEach(function(c) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;

    // Increase ambient light intensity
    const ambientLight = new THREE.AmbientLight(0x808080);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);
    //scene.background = new THREE.Color(0x87ceeb); // Sky blue color
    const loader = new GLTFLoader();
    loader.load(
      tajmahal,
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeDImage;