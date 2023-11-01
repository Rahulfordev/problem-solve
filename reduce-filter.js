let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr_reduce = array.reduce(function (prev, curr) {
  if (curr < 5 && prev === undefined) {
    prev = curr;
  }
  return prev;
}, undefined);
console.log(arr_reduce);
