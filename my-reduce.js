let arr = [10, 20, 5, 9, 65, 46, 82];

function myRedus(arr, cb, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(arr[i], acc);
  }
  return acc;
}

let sum = myRedus(
  arr,
  function (prev, curr) {
    return prev + curr;
  },
  0
);

let max = myRedus(
  arr,
  function (prev, curr) {
    return Math.max(prev, curr);
  },
  0
);

let min = myRedus(
  arr,
  function (prev, curr) {
    return Math.min(prev, curr);
  },
  arr[0]
);

console.log(sum, max, min);
