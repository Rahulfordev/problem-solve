//** multiplication table
function multiplication(multipleNumber, range) {
  let num = 0;
  for (let i = 1; i <= range; i++) {
    num = multipleNumber * i;
    console.log(`${multipleNumber} * ${i} = ${num}`);
  }
}
multiplication(8, 20);
