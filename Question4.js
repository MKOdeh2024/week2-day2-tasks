function compose(...functions) {
  return function(value) {
    return functions.reduceRight(function(acc, fn) {
      return fn(acc);
    }, value);
  };
}

// Example usage:
function add2(x) {
  return x + 2;
}

function multiply3(x) {
  return x * 3;
}

function subtract5(x) {
  return x - 5;
}

const composedFunction = compose(subtract5, multiply3, add2);
console.log(composedFunction(10)); // Output: 21
