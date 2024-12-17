import Shape from "./shapeModule.js";

class Circle extends Shape {
	#radius;
	#x;
	#y;
	constructor(color, radius, x = 0, y = 0) {
		super(color);
		this.#radius = radius;
		this.#x = x;
		this.#y = y;
	}

	getArea() {
		console.log(
			`${super.DrawShape()} (${this.constructor.name}) | radius: ${
				this.#radius
			}`
		);
		return Math.PI * this.#radius ** 2;
	}
}

export default Circle;
