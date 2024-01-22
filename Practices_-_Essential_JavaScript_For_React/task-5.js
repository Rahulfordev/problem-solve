//Task 5: JSON, Fetch, keys, values, array add or remove using dots
const url = "https://jsonplaceholder.typicode.com/posts";

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  const sliceData = data.slice(0, 15);
  findKeyValue(sliceData);
}
getData();

function findKeyValue(posts) {
  posts.push({
    userId: 1,
    id: 16,
    title: "how push item in array",
    body: "how to add and remove item in array using array mathod",
  });
  posts.shift();
  posts.map((post) => {
    for (const key in post) {
      console.log(` ${post[key]}`);
      console.log(` ${key}`);
    }
  });
}
