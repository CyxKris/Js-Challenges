function positiveSum(arr = [1, -2, 3, 4, 5]) {

  // function findPositive(number) {
  //   return Math.sign(number) == -1 ? false : true;
  // }
  // const newArr = arr.filter(findPositive);
  // const newArr = arr.filter(item => item >= 0);

  const newArr = arr.filter((item) => Math.sign(item) == -1 ? false : true);
  // console.log("The new array: ", newArr);

  return newArr.reduce((a, b) => a + b, 0);
}

console.log(positiveSum([1, -2, 3, 4, 5])); // 13