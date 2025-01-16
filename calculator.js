class calculator {
	add(x, y) {
		// TODO: implement add method
		const add = (x,y) => x + y ;
		const result = add(1,2) ;
		console.log(result); 
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
