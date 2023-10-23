// Converts a value from cents to a floating point number with 2 decimals
function centsToDecimals(cents) {
  if (typeof cents == 'string') {
    return undefined;
  }

  if (!cents){
    return 0;
  }

  cents / 100;
}


// Test Specs: centsToDecimals

console.log("\nShould convert value from cents to a floating point number with 2 decimals");
console.log(centsToDecimals(105) === 1.05);
console.log(centsToDecimals(1) === 0.01);

console.log("\nShould return `undefined` when the first argument passed is a string");
console.log(centsToDecimals('105') === undefined);

console.log("\nShould return 0 when the first argument is not passed");
console.log(centsToDecimals() === 0);