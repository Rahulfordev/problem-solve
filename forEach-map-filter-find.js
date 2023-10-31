const arr = [100, 300, 550, 50];

// for loop er poriborte for each use kora jai
arr.forEach((item) => console.log(item));

let map_arr = arr.map((item) => item * 2);

console.log(map_arr);

let filter_arr = arr.filter((arr) => arr >= 18);
console.log(filter_arr);

let find_arr = arr.find((arr) => arr >= 18);
console.log(find_arr);
