import { Easing } from "react-native";
import { THREE } from "expo-three";
import { add } from "../utils/three";

const elastic = Easing.elastic(1);

export default ({
	parent,
	x = 0,
	y = 0,
	z = 0,
	size = 1,
	scale = 1,
	color = 0xff0000
}) => {
	const geometry = new THREE.BoxGeometry(size, size, size);
	const material = new THREE.MeshStandardMaterial({ color });
	const box = new THREE.Mesh(geometry, material);

	box.position.x = x;
	box.position.y = y;
	box.position.z = z;
	box.scale.x = 0.001;
	box.scale.y = 0.001;
	box.scale.z = 0.001;

	add(parent, box);

	return {
		model: box,
		created: Date.now(),
		timelines: {
			scaleAndRotate: {
				duration: 500,
				update: (entitiy, entities, percent) => {
					const newScale = Math.max(elastic(percent) * scale, 0.001);

					box.scale.x = newScale;
					box.scale.y = newScale;
					box.scale.z = newScale;
					box.rotation.z = elastic(percent) * Math.PI * 1.5
				}
			}
		},
		segment: true,
		size,
		color,
		scale
	};
};
