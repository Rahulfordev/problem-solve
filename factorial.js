function factorial(num) {
  let factorialSum = 1;
  if (num === 0 || num === 1) return 1;
  for (let i = 1; i <= num; i++) {
    factorialSum *= i;
  }
  return factorialSum;
}

console.log(factorial(5));
