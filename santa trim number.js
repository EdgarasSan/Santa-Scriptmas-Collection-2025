function trimNumber(num) {
  // Convert number to string
  let str = num.toString();

  // Remove the middle two digits
  let result = str[0] + str[3];

  // Return as number (optional)
  return Number(result);
}

// Example
console.log(trimNumber(1235)); // ➝ 15
