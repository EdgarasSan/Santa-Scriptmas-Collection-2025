function trimNumber(num) {
  const s = num.toString();
  return Number(s[0] + s[3]);
}

console.log(trimNumber(1235)); // 15
console.log(trimNumber(9876)); // 96
console.log(trimNumber(8765)); // 85
