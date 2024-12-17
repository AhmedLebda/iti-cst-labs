import Shape from "./shapeModule.js";

export class Rectangle extends Shape {
	#height;
	#width;

	constructor(color, width, height) {
		super(color, width, height);
		this.#width = width;
		this.#height = height;
	}

	get width() {
		return this.#width;
	}
	set width(width) {
		this.#width = width;
	}
	get height() {
		return this.#height;
	}
	set height(height) {
		this.#height = height;
	}

	getArea() {
		console.log(
			`${super.DrawShape()} (${this.constructor.name}) | width: ${
				this.width
			} | height: ${this.height}`
		);

		return this.#width * this.#height;
	}
}

export class Square extends Rectangle {
	constructor(color, width, height) {
		super(color, width, height);
	}
	getArea() {
		console.log(
			`${super.DrawShape()} (${this.constructor.name}) | width: ${
				this.width
			} | height: ${this.height}`
		);
		return this.width * this.width;
	}
}
