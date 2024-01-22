//Task 3: Array Methods - map, filter, find, and forEach
const number = [3, 5, 8, 7, 14, 9, 10, 20, 15, 25];

const squareArray = number.map((item) => item ** 2);
console.log(squareArray);

const filterEven = number.filter((item) => item % 2 === 0);
console.log(filterEven);

const findNumber = number.find((item) => item > 5);
console.log(findNumber);

number.forEach((item) => console.log(item));
