import { THREE } from "expo-three";
import { add } from "../utils/three";

export default ({
	parent,
	x = 0,
	y = 0,
	z = 0,
	width = 1,
	breadth = 1,
	height = 1,
	scale = 1,
	color = 0xffffff
}) => {
	const geometry = new THREE.BoxGeometry(width, height, breadth);
	const material = new THREE.MeshStandardMaterial({ color });
	const box = new THREE.Mesh(geometry, material);

	box.position.x = x;
	box.position.y = y;
	box.position.z = z;
	box.scale.x = scale;
	box.scale.y = scale;
	box.scale.z = scale;

	add(parent, box);

	return {
		model: box,
		box: true,
		scale,
		color
	};
};
