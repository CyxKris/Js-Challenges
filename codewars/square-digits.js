// const num = 3212;

function squareDigits(num) {
  let numbers = num.toString();
  let finalProduct = "";

  for (let i = 0; i < numbers.length; i++) {
    let a = Number.parseInt(numbers[i]);
    a *= a;

    finalProduct += a.toString();
  }
  return Number.parseInt(finalProduct);
}

// function squareDigits(num) {
//   const digits = num.toString().split("");
//   console.log(digits);
//   return digits
//     .map(Number)
//     .map((digit) => digit * digit)
//     .join("");
// }

console.log(squareDigits(3212));
