class calculator {
	add(x, y) {
		return x + y ;
	}

	subtract(x, y) {
		const subtract=(x,y) => x-y;
		const result = subtract(1,2);
		console.log(result);
		// TODO: implement subtract method
	}

	multiply(x, y) {
		return x * y;

	}

	divide(x, y) {
		//TODO: implement divide method
	}
}
const calc = new calculator();
const result = calc.multiply(5, 3); 
console.log(result);

const addans =calc.add(1,2);
console.log(addans);
