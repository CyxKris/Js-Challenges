const someString = "I love to listen to music most of the time.";


String.prototype.toJadenCase = function () {
  let myString = this.split(" ");
  return myString.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
};

console.log(someString.toJadenCase());

// const words = someString.split(" ");

// words.forEach((word, index) => {
//   words[index] = word[0].toUpperCase() + word.slice(1);
// });

// const capitalizedString = words.join(" ");
// console.log("Capitalized string: " + capitalizedString);
