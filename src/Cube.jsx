import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Cube() {
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
    camera.position.set(0, 0, 10);

    // Mesh
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: "#00FFAA" });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-10, 0, -20);
    scene.add(cube)

    const capsuleGeometry = new THREE.CapsuleGeometry(1, 1, 32, 32);
    const capsuleMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const capsule = new THREE.Mesh(capsuleGeometry, capsuleMaterial);
    capsule.position.set(0, 0, -10);
    scene.add(capsule);

    const coneGeometry = new THREE.ConeGeometry(1, 2, 32);
    const coneMaterial = new THREE.MeshBasicMaterial({ color: "blue" });
    const cone = new THREE.Mesh(coneGeometry, coneMaterial);
    cone.position.set(5, 0, 0)
    scene.add(cone);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialize: true });
    renderer.setSize(width, height);

    // JS to append domElement into our HTML 
    containerRef.current.appendChild(renderer.domElement);

    function animate() {
      cube.rotation.y += 0.01
      cube.rotation.x += 0.01
      capsule.rotation.y += 0.01
      capsule.rotation.x += 0.01
      cone.rotation.y += 0.01
      cone.rotation.x += 0.01
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

export default Cube
