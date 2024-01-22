// lesson 1.
/** const rahul = {
  year: 2004,
  calcAge: function () {
    console.log(this); // full object dekhabe
    console.log(2024 - this.year); // 20
  },
};
rahul.calcAge();

const sumon = {
  year: 2003,
};

sumon.calcAge = rahul.calcAge;
sumon.calcAge(); // 21

const f = rahul.calcAge;
f(); //undefiend
 */

// lesson 2.

const rahul = {
  year: 2004,
  fullName: "MD RAHUL ALI",
  calcAge: function () {
    // console.log(this); // full object dekhabe
    console.log(2024 - this.year); // 20

  //solucation --1 
    const self = this;
    const isSumon = function () {
      console.log(self); // this dile window dekhai
      console.log(self.year >= 2000 && self.year <= 2005); // true
      // console.log(this.year >= 2000 && this.year <= 2005); // false 
    };
 

    // soluction --2
    // this parent e ache tai array function e this paiche
    // const isSumon = () => {
    //   console.log(this); // this dile window dekhai
    //   console.log(this.year >= 2000 && this.year <= 2005); // true
    //   // console.log(this.year >= 2000 && this.year <= 2005); // false
    // };
    isSumon();
  },
  greet: function () {
    // array function e undefiend dekhabe fullName
    // console.log(`my name is ${this.fullName}`);
  },
};
rahul.greet();
rahul.calcAge();

// argument

const addExport = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExport(5, 9);
addExport(5, 9, 33, 55, 22, 88);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(5, 10, 67, 7); // error: arguments is not defined
