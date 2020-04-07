/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
function sum(a, b) {
  return typeof a === "number" && typeof b === "number"
    ? Number.isInteger(a) || Number.isInteger(b)
      ? a + b
      : (a * 1000000 + b * 1000000) / 1000000
    : typeof +a === "number" &&
      typeof +b === "number" &&
      !isNaN(+a) &&
      !isNaN(+b)
    ? +a + +b
    : parseInt(a + b, 10);
}
module.exports = sum;
