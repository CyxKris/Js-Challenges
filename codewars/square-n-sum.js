function squareSum(numbers) {
  return numbers.reduce((total, sum) => total + (sum * sum), 0);
}

console.log(squareSum([1, 2, 2])); // 9