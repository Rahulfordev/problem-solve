/*
   =>Call and Apply er modde deferent holo argument Call e array akare deoya jabe na, Ar apply er argument gula array akare dite hobe.
  =>Ar Bind ke amader iccha moto call korte pari
*/

//call
function showName() {
  console.log("Name" + " : " + this.name);
}

const person = {
  name: "Sabur",
};
showName.call(person);
//
function getSum(a, b) {
  return (a + b) * this.c;
}

const obj1 = {
  c: 10,
};
console.log(getSum.call(obj1, 5, 10));

//apply
function getResult(a, b, c) {
  return a * b * c + this.d;
}

const numD = {
  d: 5,
};
console.log(getResult.apply(numD, [3, 3, 3])); // argument gula array akare dite hobe

//Bind
function getAge(curr, birth) {
  return this.name + " age is " + (curr - birth) + " year old!";
}

const age = {
  name: "Rasel Domingo",
};

const currAge = getAge.bind(age, 2023, 2004);
console.log(currAge());
