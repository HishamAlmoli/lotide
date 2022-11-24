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

// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false