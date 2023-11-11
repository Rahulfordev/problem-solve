const data = [
  { id: 1, title: "hello" },
  { id: 3, title: "hey" },
  { id: 2, title: "hey" },
];

// find index
// const itemIndex = data.findIndex((el) => el.id === 2);
// console.log(itemIndex);

// find
// const item = data.find((el) => el.id === 2);
// console.log(item);

// destructuring
const obj = {
  name: "rahul",
  age: 19,
  mStatus: "no",
  // address: {
  //   district: "Natore",
  //   village: "gouripur",
  // },
};

// const { name = "Rahul ALi" } = obj;
// const { name: fName = "rahul", lName = "ALi" } = obj;
// const { name: fullName } = obj;
// const { name: fullName, ...rest } = obj;
// const { address: { district, village } }= obj;
// const { address: { district: jela , village: giram } }= obj;

// api e key na pale error handle
// const { address: { district } } = obj; // error TypeError: Cannot read properties of undefined
// const { address: { district } = {} } = obj; // undefined dekhabe -->error handleing

// console.log(district);

// *** funcation
function getFun({ name, age, food = "apple" }) { // food="apple"
  console.log(name, age, food);
}

getFun(obj);
