const eqArrays = require("./eqArrays");

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("PASSED: " + actual + "===" + expected + "\n");
  } else {
    console.log("Failed: " + actual + "!==" + expected + "\n");
  }
};

module.exports = assertArraysEqual;