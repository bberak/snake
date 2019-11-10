import { THREE } from "expo-three";
import { all, id } from "../utils";
import Segment from "../components/segment";
import _ from "lodash";

const nextId = id(0);

const Grow = entities => {

	const direction = entities.direction;
	const pointLight = entities.pointLight;
	const segments = all(entities, x => x.segment);
	const head = _.maxBy(segments, x => x.created);
	const offset = new THREE.Vector3(head.size * head.scale, head.size * head.scale, head.size * head.scale).multiply(direction);

	const next = Segment({
		parent: head.model.parent,
		x: head.model.position.x + offset.x,
		y: head.model.position.y + offset.y,
		z: head.model.position.z + offset.z,
		scale: head.scale
	});

	pointLight.position.copy(next.model.position);

	entities[nextId("segment")] = next;

	return entities;
};

export default Grow;
