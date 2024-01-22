//Task 6: Truthy, Falsy, Ternary Operator, Short-circuit, OR Operator
if (10 > 5 && 5 === 5) {
  console.log("this is condition true.");
}

const evenNum = 10 % 2 === 0 ? "even" : "odd";
const oddNum = 13 % 2 === 0 ? "even" : "odd";
console.log(evenNum, oddNum);

const num = 150;

num > 100 && console.log("short-circuiting");
