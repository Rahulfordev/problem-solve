// Function passed as an argument to another function
function applyOperation(operation, x, y) {
  return operation(x, y);
}

// Functions to be used as arguments
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// Using the higher-order function to perform operations
const resultAdd = applyOperation(add, 4, 2); // Passing 'add' function
const resultSubtract = applyOperation(subtract, 7, 3); // Passing 'subtract' function
const resultMultiply = applyOperation(multiply, 5, 6); // Passing 'multiply' function

console.log("Result of addition:", resultAdd);
console.log("Result of subtraction:", resultSubtract);
console.log("Result of multiplication:", resultMultiply);

// Function returned by another function and assigned to a variable
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2); // Returns a function that doubles the number
const triple = createMultiplier(3); // Returns a function that triples the number

console.log("Double of 5:", double(5)); // Output: 10
console.log("Triple of 5:", triple(5)); // Output: 15
