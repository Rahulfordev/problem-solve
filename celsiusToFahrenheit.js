function farenhite(enterCalcTemp) {
  return enterCalcTemp * (9 / 5) + 32;
}

console.log(farenhite(38) + "°F");

function calc(enterFarTemp) {
  return (enterFarTemp - 32) * (5 / 9);
}

console.log(calc(32) + "°C");
