import Camera from "./camera";
import Rotation from "./rotation";
import Timeline from "./timeline";
import TouchController from "./touch-controller";
import Grow from "./grow"
import Input from "./input";
import { throttle } from "../utils";

export default [
	TouchController()(),
	Camera({ pitchSpeed: -0.01, yawSpeed: 0.01 }),
	Rotation,
	Timeline,
	Input,
	throttle(Grow, 500, x => x)
];
