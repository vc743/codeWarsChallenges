// Sum Numbers
function sum (numbers) {
    "use strict";
    const result = numbers.reduce((total, item) => {
      return total += item;
    }, 0)
    return result;
};