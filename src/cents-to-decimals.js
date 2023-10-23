// Converts a value from cents to a floating point number with 2 decimals
function centsToDecimals(cents) {
  if (typeof cents == 'string') {
    return undefined;
  }

  if (!cents){
    return 0;
  }

  return cents / 100;
}
