function removeMiddleDigits(num) {
  // Convert number to string
  const str = num.toString();
  
  // Get first and last digit
  const firstDigit = str[0];
  const lastDigit = str[str.length - 1];
  
  // Combine and convert back to number
  const result = parseInt(firstDigit + lastDigit);
  
  return result;
}

// Test with Santa's example
console.log(removeMiddleDigits(1235)); // Should output: 15

// More test cases
console.log(removeMiddleDigits(5678)); // Should output: 58
console.log(removeMiddleDigits(9024)); // Should output: 94
console.log(removeMiddleDigits(1000)); // Should output: 10