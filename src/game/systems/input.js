const Input = (entities, { touchController }) => {
	
	const direction = entities.direction;
	const movement = touchController.singleFingerMovement;

	if (Math.hypot(movement.x, movement.y)) {
		if (Math.abs(movement.x) > Math.abs(movement.y))
			direction.set(movement.x > 0 ? 1 : -1, 0, 0);
		else
			direction.set(0, movement.y > 0 ? -1 : 1, 0);
	}

	return entities;
};

export default Input;