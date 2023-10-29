let array = ["Rezaul", "Rabbi", "Omor Faruk", "Rahul", "Babu", "Rezaul"];

function myFunc(items, callBack) {
  let findItem = "";
  for (const item of items) {
    if (callBack(item)) {
      findItem += item;
      return findItem;
    }
  }
}

function callBack(item) {
  let searchItem = "Rahul";
  if (item == searchItem) {
    return true;
  }
}
console.log(myFunc(array, callBack));
