let in_valid_Array = [1, "", null, undefined, "name"];

function trueAndFalseValueFind(array, callBack) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    let isTrue = callBack(item);
    if (isTrue === true) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

function callBackFunc(item) {
  return !item ? true : false;
}

console.log(trueAndFalseValueFind(in_valid_Array, callBackFunc));
