// Task 4: Array and Object Destructuring
const colors = ["red", "yellow", "green", "orange", ["mango"]];

const [red, yellow, green, orange, [or]] = colors;
console.log(red);

const person = {
  name: "Jahid Sabur",
  age: 35,
};

const { name, age } = person;
console.log(name);
