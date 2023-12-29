// lesson 1.
const me = {
  name: "Rahul",
  age: 20,
};

const friend = me;
friend.age = 30;

console.log("Friend :", friend);
console.log("Me :", me);

// lesson 2.
const faruk = {
  fName: "Faruk",
  lName: "Ali",
};

const farukCopy = Object.assign({}, faruk);
/**
 * Object.assign only work on the first level.
 * only creates a shallow copy.
 * shallow copy will only copy the propertis in the first level
 * while a deep clone would copy everything
 */

farukCopy.fName = "Sakib";

console.log("before faruk ", faruk); // { fName: 'Faruk', lName: 'Ali' }
console.log("after faruk ", farukCopy); //{ fName: 'Sakib', lName: 'Ali' }
