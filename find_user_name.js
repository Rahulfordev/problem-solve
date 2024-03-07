const users = [
  {
    name: "Rahul",
    name: "hello",
    username: "rahulfordev12",
    email: "rahulali@gmail.com",
    age: 19,
  },

  {
    name: "Momin",
    username: "momin15",
    email: "mominali@gmail.com",
    age: 24,
  },
  {
    name: "mustafiz",
    username: "mustafiz69",
    email: "mustafizali@gmail.com",
    age: 26,
  },
];

let findUsername = "mustafiz6s9";
let isFound = false;

for (let i = 0; i < users.length; i++) {
  if (users[i].username === findUsername) {
    let userDetails = users[i];
    console.log("User is found ", userDetails);
    isFound = true;
    break;
  }
}

if (!isFound) {
  console.log("User is not found");
}
