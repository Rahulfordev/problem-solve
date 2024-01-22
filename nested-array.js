const arr = [
  [10, 20, 30, 40, 50, [1500, 3000, 6000]],
  [50, 60, 70, 80, 90, 100],
  [110, 120, 130, 140, 150, ["Rahuol", "computer", "ass-sunna"]],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(i + " : " + arr[i][j]);
    if (Array.isArray(arr[i][j])) {
      let childArray = arr[i][j];
      //   console.log(childArray);
      for (let g = 0; g < childArray.length; g++) {
        // console.log(childArray[g]);
      }
    }
  }
}

// find the nagative and possative number
// separate negative and positive

// function sortPositiveNegative(array) {
//   let arrayLength = array.length;
//   let positive = [];
//   let negative = [];

//   for (let i = 0; i < arrayLength; i++) {
//     if (array[i] > 0) {
//       positive.push(array[i]);
//     } else if (array[i] < 0) {
//       negative.push(array[i]);
//     } else console.log(array[i]);
//   }
//   return { positive, negative };
// }
// const sortedArrays = sortPositiveNegative([5, 10, 0, -60, -1]);
// console.log(sortedArrays); //0, { positive: [ 5, 10 ], negative: [ -60, -1 ] }
