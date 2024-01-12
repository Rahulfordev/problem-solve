const person = {
  isHuman: false,
  printIntroducation: function () {
    console.log(`my name is ${this.name}, i'm human ${this.isHuman}`);
  },
};

const me = Object.create(person);
me.name = "Rahul";
me.isHuman = true;
me.printIntroducation();

//
class Persons {
  constructor(name) {
    this.name = name;
  }
}

const myName = new Persons("Jahid");
console.log(myName);

const objectName = new (function () {
  this.name = "rahul";
})();

console.log(objectName.name);

let arrayIntegers = [1, 2, 3, 4, 5];
// const newArr = arrayIntegers.slice(1);
// console.log(newArr);
// console.log(arrayIntegers)
const spliceNew = arrayIntegers.splice(2, 2);
console.log(spliceNew);
