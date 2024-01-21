let filterValue = [
  "🍎",
  null,
  "",
  "🍉",
  undefined,
  "🍊",
  NaN,
  "🍌",
  false,
  0,
  "🍍",
];

const filterOne = filterValue.filter(Boolean);
console.log(filterOne);
