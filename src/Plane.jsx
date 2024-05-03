import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Plane() {
  const containerRef = useRef(null);

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
    plane.rotation.set(5, 0, 0);
    scene.add(plane);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialize: true });
    renderer.setSize(width, height);

    // JS to append domElement into our HTML 
    containerRef.current.appendChild(renderer.domElement);

    renderer.render(scene, camera);
  }, [containerRef]);

  return (
    <>
      <div ref={containerRef} />
    </>
  )
}

export default Plane