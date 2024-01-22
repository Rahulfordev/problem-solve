//Task 7: Explore Local Storage and Session Storage with JSON
const person1 = {
  name: "Abdur Rohman",
  age: 35,
};

localStorage.setItem("userInfo", JSON.stringify(person1));
const getItem = localStorage.getItem("userInfo");
console.log(JSON.parse(getItem));
localStorage.clear();

sessionStorage.setItem("userDetails", JSON.stringify(person1));
const getSessionData = sessionStorage.getItem("userDetails");
console.log(JSON.parse(getSessionData));
