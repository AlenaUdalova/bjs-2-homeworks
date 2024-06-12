"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  } else if (d === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  }
 return arr;
}
console.log(solveEquation());

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let P = percent / 100 / 12;
  let S = amount - contribution;
  let n = countMonths;

  let payment = S * (P + (P / (((1 + P) ** n) - 1)));
  let total = Number(payment * countMonths.toFixed(2));

  return total;
}

console.log(calculateTotalMortgage());