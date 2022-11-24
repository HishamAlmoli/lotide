const without = function(arr1, toRemove) {
    //console.log(`All-->${toRemove}`);
    if (toRemove.length === 0 ) {
        //console.log(`x-->${toRemove[0]}`);
        return arr1;
    } else {
        let arr2 = [];
        for (let j = 0; j < toRemove.length; j++) {
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== toRemove[j]) {
                    console.log(`arr2(${i}) --> [${arr1[i]}] ??? ${toRemove[j]}`);
                    arr2.push(arr1[i]);
                    console.log(`${i} --> [${arr2}] --- ${toRemove[j]}`);
                }
            }
        
        }
    console.log(`Input --> [${arr1}], Removed Items --> [${toRemove}], To be [${arr2}]`);
    return arr2;
    }
    
};

// TEST CODE
//without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
