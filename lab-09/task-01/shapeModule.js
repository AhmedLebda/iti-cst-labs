//! Abstract Class

class Shape {
	#color;
	constructor(color) {
		if (new.target.name === "Shape") {
			throw new Error("Cannot instantiate abstract class Shape");
		}
		this.#color = color;
	}

	get Color() {
		return this.#color;
	}
	set Color(color) {
		this.#color = color;
	}

	DrawShape() {
		// console.log(`Drawing a shape with color ${this.Color}`);
		return `Drawing a shape with color ${this.Color}`;
	}
}

export default Shape;
