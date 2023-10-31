let array = [
  {
    name: "a",
    age: 10,
  },
  {
    name: "b",
    age: 25,
  },
  {
    name: "c",
    age: 35,
  },
];

// using filter
let arr = array.filter((item) => item.age > 20);
console.log(arr);

// using for in loop
for (arr in array) {
  if (array[arr].age > 20) {
    console.log(array[arr]);
  }
}

// using reduce
let filterAge = array.reduce(function (prev, item) {
  if (item.age > 20) {
    prev.push(item);
  }
  return prev;
}, []);

console.log(filterAge);
