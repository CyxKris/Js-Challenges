const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const removeFirstTwo = (arrayOfItems) => {
  const [a, b, ...newArray] = arrayOfItems;

  return newArray;
};

console.log(removeFirstTwo(myArray));
