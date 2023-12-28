/**
 *Your task is to make a function that can take any non-negative integer as an argument and return * it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
 */

/** ABOUT THE SORT METHOD COMPARE FUNCTION
 * 
 * The sort method’s compare function parameter has a simple syntax; it accepts a function that takes two arguments and returns a positive, zero, or negative value. Based on the return value, it will assign a position for each item in the array. If the return value is a negative number, then the sort method knows the first number compared is lower than the second number.

Likewise, if the return value is positive, then the first number is higher, and a return value of zero implies the two values are the same. 
 */

function descendingOrder(n = 42145) {
  const numberString = n.toString().split("");
  const sortedArray = numberString.sort((a, b) => b - a);
  return Number(sortedArray.join(""));
}

console.log(descendingOrder());
// console.log(descendingOrder(42145));