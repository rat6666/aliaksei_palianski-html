"use strict";

function findUnique(numbers) {
  var set = new Set();
  numbers.forEach(x => {
    set.has(x) ? set.delete(x) : set.add(x);
  });
  return set.values().next().value;
}

findUnique([2, 1, 2]);

console.log();
