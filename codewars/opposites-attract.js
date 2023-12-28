/**
 * Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
 */

function loveFunc(flower1 = 0, flower2 = 0) {
  const flower1IsEven = flower1 % 2
  const flower2IsEven = flower2 % 2
  
  // return (flower1IsEven !== flower2IsEven) ? true : false;
  return flower1IsEven !== flower2IsEven;
}

console.log(loveFunc()); // true, 2, 2 -> false, 0, 1 -> true, 0, 0 -> false