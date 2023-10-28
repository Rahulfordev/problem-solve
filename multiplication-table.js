//** multiplication table
function multiplication(multipleNumber) {
  let num = 0;
  for (let i = 0; i <= 10; i++) {
    num = multipleNumber * i;
    console.log(`${multipleNumber} * ${i} = ${num}`);
  }
}
multiplication(8);
