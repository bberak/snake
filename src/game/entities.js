import { THREE } from 'expo-three';
import Camera from "./components/camera";
import Wall from "./components/wall";
import Segment from "./components/segment";
import { clear } from "./utils/three";

const scene = new THREE.Scene();
const camera = Camera();

export default async () => {
	clear(scene);

	const ambient = new THREE.AmbientLight(0xffffff, 1);
	const sunlight = new THREE.DirectionalLight(0xffffff, 1);
	const pointLight = new THREE.PointLight(0xff0000, 1, 0.4);
	const container = new THREE.Group();

    sunlight.position.set(50, 50, 50);

    scene.add(ambient);
    scene.add(sunlight);
    scene.add(container);
    container.add(pointLight);

	camera.position.set(0, 0, 3);
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	const entities = {
		scene,
		camera,
		pointLight,
		container,
		direction: new THREE.Vector3(1, 0, 0),
		wall: Wall({ parent: container }),
		segment: Segment({ parent: container, scale: 0.05, z: 0.55 })
	}

	return entities;
};