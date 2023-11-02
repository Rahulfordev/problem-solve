function clgStudent(name, age, gpa, lan) {
    this.name = name;
    this.age = age;
    this.gpa = gpa;
    this.lan = lan; 
  }
  
  const studentOne = new clgStudent("Rahul Ali", 19, 3.5, [
    "Eng",
    "Bang",
    "Hind",
  ]);
  
  const studentTwo = new clgStudent("Sumon Ali", 19, 4.0, [
    "China",
    "Europe",
    "Hind",
  ]); 

  console.log(studentOne);

///
function clgStudent(name, age, gpa, lan) {
  this.name = name;
  this.age = age;
  this.gpa = gpa;
  this.lan = lan;

  this.display = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.gpa);
    console.log(this.lan);
  };
}

const studentOne = new clgStudent("Rahul Ali", 19, 3.5, [
  "Eng",
  "Bang",
  "Hind",
]);

const studentTwo = new clgStudent("Sumon Ali", 19, 4.0, [
  "China",
  "Europe",
  "Hind",
]);
studentOne.display();
studentTwo.display();
