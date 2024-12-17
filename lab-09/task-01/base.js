import { Rectangle, Square } from "./SquaresModule.js";
import Circle from "./CircleModule.js";
import Shape from "./shapeModule.js";

const shapes = [];

for (let i = 0; i < 3; i++) {
	for (let y = 0; y < 3; y++) {
		switch (i) {
			case 0:
				shapes.push(
					new Rectangle("red", getRandomNumber(), getRandomNumber())
				);
				break;
			case 1:
				shapes.push(
					new Square("blue", getRandomNumber(), getRandomNumber())
				);
				break;
			case 2:
				shapes.push(new Circle("green", getRandomNumber()));
				break;
		}
	}
}

for (let shape of shapes) {
	if (shape instanceof Shape) {
		console.log(`${shape.constructor.name} Area ${shape.getArea()}`);
	}
}

function getRandomNumber() {
	return Math.floor(Math.random() * 100);
}
