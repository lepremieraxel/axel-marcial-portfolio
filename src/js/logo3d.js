import * as THREE from "./three/build/three.module.js";
import { GLTFLoader } from "./three/examples/jsm/loaders/GLTFLoader.js";

const canvas = document.querySelector(".webgl1");

const scene = new THREE.Scene();
scene.background = null;

const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const logo = new GLTFLoader();

logo.load(
  "../../assets/logo/logo.glb",
  function (gltf) {
    const logoMesh = gltf.scene;
    logoMesh.position.x = -.5;
    logoMesh.position.y = 1;
    scene.add(logoMesh);
    animate();
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.error(error);
  }
);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);

const mouse = new THREE.Vector2();

function onMouseMove(event) {
  mouse.x = event.clientX / window.innerWidth;
  mouse.y = event.clientY / window.innerHeight;
}

const animate = () => {
  requestAnimationFrame(animate);

  camera.position.x = - Math.sin(.5 * Math.PI * (mouse.x - .5)) * 5;
  camera.position.y = - Math.sin(.25 * Math.PI * (mouse.y - .5)) * 5;
  camera.lookAt(scene.position);
  light.position.x = - Math.sin(.5 * Math.PI * (mouse.x - .5)) * 3;
  light.position.y = - Math.sin(.25 * Math.PI * (mouse.y - .5)) * 3;
  light.lookAt(scene.position);

  renderer.render(scene, camera);
};
window.addEventListener("mousemove", onMouseMove, false);
