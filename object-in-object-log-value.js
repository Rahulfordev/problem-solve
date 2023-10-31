let object = {
  b: 10,
  obj: {
    c: 30,
  },
  x: {
    c: 100,
  },
};

for (const key in object) {
  if (typeof object[key] === "object") {
    let second_level = object[key];
    for (let secondKey in second_level) {
      console.log(second_level[secondKey]);
    }
  } else {
    console.log(object[key]);
  }
}
