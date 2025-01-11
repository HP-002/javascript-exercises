const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
    let s = 0;
	for(const num of numArray) {
        s += num;
    }
    return s;
};

const multiply = function(numArray) {
    let product = 1;
    for(const num of numArray) {
        product *= num;
    }
    return product;
};

const power = function(base, power) {
	return Math.pow(base, power);
};

const factorial = function(num) {
    if(num < 2) {
        return 1;
    }

	let product = 1;
    while(num != 1) {
        product *= num;
        num--;
    }
    return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
