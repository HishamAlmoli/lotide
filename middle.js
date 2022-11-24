const eqArrays = function(arr1, arr2) {
    let result = true;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]){
            result = false;
            console.log(`result --> ${result}`);
            return false;
        }
    }
    console.log(`result --> ${result}`);
    return true;
};

const assertArraysEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`Assertion Passed: ${actual} === ${expected} ✅✅✅`);
      } else {
        console.assert(actual === expected, `${actual} !== ${expected} 🛑🛑🛑`);
      }
  }
  
  // ACTUAL FUNCTION
  const middle = function(array) {
    let middle = [];
    if (array.length > 2) {
        if ((array.length % 2) === 0) {
            // console.log("even")
            middle.push(array[(array.length / 2) - 1]);
            middle.push(array[array.length / 2]);
        } else {
            // console.log("odd")
            middle.push(array[(Math.floor(array.length / 2))]);
        }
    }
    console.log(middle);
    return middle;
  }
  
// TEST CODE
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]