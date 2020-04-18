/* eslint-disable no-undef */
// eslint-disable-next-line node/no-unpublished-require
const { assert } = require("chai");
const sum = require("./sum-function.js");

describe("sum function", function () {
  it("Sum of two numbers", function () {
    assert.equal(sum(2, 3), 5);
  });
  it("One number is NaN", function () {
    assert.isNaN(sum("string", 5));
  });
  it("Two numbers are NaN", function () {
    assert.isNaN(sum("string", "course"));
  });
  it("Two numbers are small float", function () {
    assert.equal(sum(0.1, 0.2), 0.3);
  });
  it("Two strings can be converted to a number", function () {
    assert.equal(sum("10", "12"), 22);
  });
});
