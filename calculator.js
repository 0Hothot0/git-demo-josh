class calculator {
	add(x, y) {
		// TODO: implement add method
		const add = (x,y) => x + y ;
		const result = add(1,2) ;
		console.log(result); 
	}

	subtract(x, y) {
		// TODO: implement subtract method
		return x - y;
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
const result2 = calc.subtract(5, 3); 
console.log(result);
console.log(result2);

