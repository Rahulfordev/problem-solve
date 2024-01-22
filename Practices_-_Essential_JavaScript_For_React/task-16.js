// Task 16: Calculate Total Price
const shopping = [
  {
    name: "phone",
    price: 100000,
  },
  {
    name: "desktop computer",
    price: 200000,
  },
  {
    name: "laptop",
    price: 100000,
  },
  {
    name: "iMac",
    price: 100000,
  },
];

const totalItemPrice = shopping.reduce((acc, curr) => {
  let totalPrice = (acc += curr.price);
  return totalPrice;
}, 0);

console.log(totalItemPrice);
