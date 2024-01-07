// ****  factorial using for loop
// let factorial = 1;
// for (let i = 1; i <= 10; i++) {
//   factorial = factorial * i;
//   console.log(i, factorial);
// }

// **** factorial using function
// function factorial(num) {
//   let fac = 1;
//   for (let i = 1; i <= num; i++) {
//     fac = fac * i;
//     console.log(i, fac);
//   }
// }
// console.log(factorial(10));

// **** factorial using while
// function factorial(n) {
//   let i = 1;
//   let fac = 1;
//   while (i <= n) {
//     fac = fac * i;
//     i++;
//   }
//   return fac;
// }

// const result = factorial(10);
// console.log(result);

// **** factorial using recursive function
/**
 * 5 = 1*2*3*4*5
 * 5! = (5-1) * 5
 * n! = n* (n - 1)!
 */

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return (n = n * factorial(n - 1));
//   }
// }

// const result = factorial(10);
// console.log(result);
