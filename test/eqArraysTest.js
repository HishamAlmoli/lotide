const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
const assert = require("chai").assert;


describe("#eqArrays", () => {
  it(`returns true for eqArrays([1, 2, 3], [1, 2, 3])`, () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it(`returns false for eqArrays([1, 2, 3], [3, 2, 1])`, () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it(`returns true for eqArrays(["1", "2", "3"], ["1", "2", "3"])`, () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it(`returns false for eqArrays(["1", "2", "3"], ["1", "2", 3])`, () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});
