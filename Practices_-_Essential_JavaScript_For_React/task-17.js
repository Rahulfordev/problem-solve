// Task 17: Grouping Objects by Category
const product1 = [
  {
    name: "i phone 15 pro max",
    category: "phone",
    price: 150000,
  },
  {
    name: "Apple",
    category: "fruits",
    price: 500,
  },
  {
    name: "orange",
    category: "fruits",
    price: 450,
  },
  {
    name: "microphone",
    category: "teck",
    price: 2000,
  },
];

const groupSameCategory = product1.reduce((acc, curr) => {
  if (curr.category == "fruits") {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(groupSameCategory);

const groupSameCategory1 = product1.reduce((acc, product) => {
  const { category } = product;

  if (!acc[category]) {
    acc[category] = [];
  }

  acc[category].push(product);
  return acc;
}, {});

console.log(groupSameCategory1);
