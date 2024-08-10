function findShortestStringRecursive(arr) {
  if (arr.length === 1){
    return arr[0];
  }

  //  recursivly go through the array and store the resulting elelements in a variable called result
  const result = findShortestStringRecursive(arr.slice(1));

  // if the first element's length is <= the result's length:
    // return the first element
  // else:
    // return the result
  return arr[0].length <= result.length ? arr[0] : result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));

  console.log("");

  console.log("Expecting: 'cat'");
  console.log("=>", findShortestStringRecursive(['cat']));

  console.log("");

  console.log("Expecting: 'Paris'");
  console.log("=>", findShortestStringRecursive(['London', 'Switerland', 'DominicanR', 'Holland', 'Paris']));

}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution

// function findShortestString(arr) {
//   return arr.reduce((shortest, string) =>
//     string.length < shortest.length ? string : shortest
//   );
// }

function findShortestStringRecursive(arr) {
  // Base case: If the array has only one element, return that element.
  if (arr.length === 1) {
      return arr[0];
  }

  // Recursive case:
  // Compare the first element with the result of findShortestStringRecursive called on the rest of the array.
  const first = arr[0];
  const restShortest = findShortestStringRecursive(arr.slice(1));

  // Return the shorter string.
  return first.length <= restShortest.length ? first : restShortest;
}

// Example usage:
const strings = ["apple", "orange", "kiwi", "banana"];
const shortestString = findShortestStringRecursive(strings);
console.log(shortestString); // Output: "kiwi"
