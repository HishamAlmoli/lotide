const assertEqual = function(actual, expected) {
    console.log(actual[0]);
    return actual[0];
};

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual([5,6,7], 5);
assertEqual(["Hello", "Lighthouse", "Labs"], "Hello");