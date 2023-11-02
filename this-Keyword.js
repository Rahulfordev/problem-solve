function thisKeyword() {
  console.log(this);
}

thisKeyword();

/// 1
function thisKeywordOne() {
  this.name = "Zahid Ahmed";
}
thisKeywordOne();
console.log(name);

/// 2

const myCustomObj = {
  name: "jahid Rohoman",
  age: 22,
  msg: function () {
    console.log("My name is " + this.name);
  },
};

myCustomObj.msg();
console.log(this.name);
