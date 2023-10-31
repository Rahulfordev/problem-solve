const arr = [100, 300, 550, 50];

let reduce_arr = arr.reduce(function (prev, curr) {
  prev[curr] = curr;
  return prev;
}, {});

console.log(reduce_arr);
