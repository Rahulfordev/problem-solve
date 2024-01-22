/* ====  way 1 ==== */
// ** setTimeout na thakleo same answer asbe

// const takeOrder = (customer, cb) => {
//   console.log(`Take order for ${customer}`);
//   cb(customer);
// };

// const arrangItem = (customer, cb) => {
//   setTimeout(() => {
//     console.log(`Arrange item for ${customer}`);
//     cb(customer);
//   }, 0);
// };

// const processOrder = (customer, cb) => {
//   setTimeout(() => {
//     console.log(`Process Order for ${customer}`);
//     cb(customer);
//   }, 0);
// };

// const completeOrder = (customer) => {
//   console.log(`Complete Order for ${customer}`);
// };

// takeOrder("Rahul Ali", (customer) => {
//   arrangItem(customer, () => {
//     processOrder(customer, () => {
//       completeOrder(customer);
//     });
//   });
// });

/* ====  way 2 ==== */
const takeOrder = (customer) => {
  console.log(`Take order for ${customer}`);
  return new Promise((resolve, reject) => {
    resolve(customer);
  });
};

const arrangItem = (customer) => {
  console.log(`Arrange item for ${customer}`);
  return new Promise((resolve, reject) => {
    resolve(customer);
  });
};

const processOrder = (customer) => {
  console.log(`Process Order for ${customer}`);
  return new Promise((resolve, reject) => {
    resolve(customer);
  });
};

const completeOrder = (customer) => {
  console.log(`Complete Order for ${customer}`);
  return new Promise((resolve, reject) => {
    resolve(customer);
  });
};

takeOrder("Rahul Ali")
  .then((res) => arrangItem(res))
  .then((res) => processOrder(res))
  .then((res) => completeOrder(res));

/* ==== */
// for (var i = 0; i < 6; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 100);
// }

// console.log(i);
