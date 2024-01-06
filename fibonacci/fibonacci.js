/**
 * fibo[1] = fibo[1] + fibo[0]
 * fibo[2] = fibo[2 -1] + fibo[2 - 2]
 *
 * 3 = [3-1] + [3-2]
 * 4= [4-1] + [4-2]
 *
 */
// let fibo = [0, 1];
// for (let i = 2; i <= 10; i++) {
//   fibo[i] = fibo[i - 1] + fibo[i - 2];
//   console.log(fibo[i], fibo[i - 1], fibo[i - 2]);
// }

//  ***** fibonacci recursive way
// function fibonacci(n) {
//   if (n == 0) {
//     return 0;
//   }
//   if (n == 1) {
//     return 1;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// const result = fibonacci(10);
// console.log(result);

//  ***** fibonacci ceries recursive way
function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return [0, 1];
  } else {
    let fibo = fibonacci(n - 1); // 0,1
    let nextElerntg = fibo[n - 1] + fibo[n - 2];
    fibo.push(nextElerntg);
    return fibo;
  }
}

const result = fibonacci(10);
console.log(result);
