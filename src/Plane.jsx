import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Plane() {
  const containerRef = useRef(null);

  const DEFAULT_X_ROTATION = 5;

  useEffect(() => {
    if (!containerRef.current || containerRef.current.children.length !== 0) {
      return;
    }

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const width = window.innerWidth;
    const height = window.innerHeight;
    const viewAngle = 45;
    const nearClipping = 0.1;
    const farClipping = 9999;

    const camera = new THREE.PerspectiveCamera(viewAngle, width / height, nearClipping, farClipping);
    camera.position.set(0, 10, 45);

    // Mesh
    const planeGeometry = new THREE.PlaneGeometry(20, 20);
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 'green', side: THREE.DoubleSide });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.set(DEFAULT_X_ROTATION, 0, 0);
    scene.add(plane);

    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: "#00FFAA" });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(0, 1, 0);
    cube.rotation.set(DEFAULT_X_ROTATION, 0, 0);
    scene.add(cube)

    const cubeTwoGeometry = new THREE.BoxGeometry(2, 2, 2);
    const cubeTwoMaterial = new THREE.MeshBasicMaterial({ color: "red" });
    const cubeTwo = new THREE.Mesh(cubeTwoGeometry, cubeTwoMaterial);
    cubeTwo.rotation.set(DEFAULT_X_ROTATION, 0, 0);
    cubeTwo.position.set(7, -1.1, 7);
    scene.add(cubeTwo)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialize: true });
    renderer.setSize(width, height);

    // JS to append domElement into our HTML 
    containerRef.current.appendChild(renderer.domElement);


    function animate() {
      cube.rotation.z += 0.01
      cubeTwo.rotation.z += 0.01
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();
  }, [containerRef]);

  return (
    <>
      <div ref={containerRef} />
    </>
  )
}

export default Plane