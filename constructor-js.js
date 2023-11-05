function Person(name, age) {
  this.name = name;
  this.age = age;
  this.print = function () {
    console.log("Age" + " :: " + this.age);
  };
}

const p1 = new Person("Risep Tayep", 70);
const p2 = new Person("Valider Putin", 75);
const p3 = new Person("Imran Khan", 65);
// console.log(p1);
// console.log(p1.name);
const presidentList = [p1, p2, p3];
presidentList.forEach(function (person) {
  //   console.log("Name" + " : " + person.name);
  //   console.log("Age" + " : " + person.age);
  //   person.print();
});

for (const item in p1) {
  //   console.log(item);
  //   console.log(item + " = " + p1[item]);
}

// new object

function Book(name, company, salary) {
  this.name = name;
  this.company = company;
  this.salary = salary;
}

const b1 = new Book("Jahid Sabur", "Google", 50);
console.log(b1.constructor);
/*output:- 
Book(name, company, salary) {
  this.name = name;
  this.company = company;
  this.salary = salary;
}
*/
