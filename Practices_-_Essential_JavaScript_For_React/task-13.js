// Task 13: Fetching and Displaying Data
//Fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json));

//async await
const url1 = "https://jsonplaceholder.typicode.com/users";

async function getData() {
  const response = await fetch(url1);
  const data = await response.json();
  console.log(data);
}
getData();
