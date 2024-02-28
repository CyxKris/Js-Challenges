const myFunction = (myObject) => {
  return Object.keys(myObject);
}

// console.log(myFunction({ a: 1, b: 2, c: 3 }));

const returnMultiples = (num, length) => {
  const multiplesArray = [];

  while (multiplesArray.length < length) {
    multiplesArray.push(num * (multiplesArray.length + 1));
  }

  return multiplesArray;
}

console.log(returnMultiples(17, 6));