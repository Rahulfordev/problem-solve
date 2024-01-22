//Task 9: Dynamic Filtering with Array of Objects
const products = [
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
    name: "microphone",
    category: "teck",
    price: 2000,
  },
];

function filterProducts(products) {
  const filterProduct = products.filter((item) => {
    return item.category === "fruits";
  });
  console.log(filterProduct);
}

filterProducts(products);
