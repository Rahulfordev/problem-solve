// *** splice is mutable and slice is immutable

const charactarsArr = [
  "monuter",
  "keybord",
  "mouse",
  "microphone",
  "internet",
  "table",
];

// *** splice
// const spliceArr = charactarsArr.splice(1, 3, "light", "phane");
// console.log(spliceArr);
// console.log(charactarsArr); // added "light", "phane"

// *** slice
// const sliceArr = charactarsArr.slice(1, 3);
// console.log(sliceArr);
// console.log(charactarsArr);

// *** spread operator using beacuse main array not immutable
const copyArr = [...charactarsArr];
const copySplice = copyArr.splice(1, 3, "note", "khata");
console.log(copySplice);
console.log(copyArr);
console.log(charactarsArr);
