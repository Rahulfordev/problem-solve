// let obj = {
//   // rahul ali: 50, // error dekhabe
//   "rahul ali": 50,
//   address: "natore",
// };

// // console.log(obj.rahul ali);// error dekhabe
// console.log(obj["rahul ali"]);

// let thikana = "address";
// console.log(obj[thikana]);

// //
// obj["vallage"] = "lalpur";
// console.log(obj);

// //
// obj["vallage add"] = "gopulpur";
// console.log(obj["vallage add"]);

function hello(a, call) {
  console.log(a);
  console.log(call());
}

function hi() {
  return 5 + 10;
}

console.log(hello(10, hi));
