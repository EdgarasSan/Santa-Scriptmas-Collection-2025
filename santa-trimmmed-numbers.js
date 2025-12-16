function FirstLastTrim(input) {
    var str = input.toString();
    var lastindex = str.length
    return Number(str[0] + str[Math.max(0,lastindex-1)]);
}

console.log(FirstLastTrim(1235)); // 15
console.log(FirstLastTrim(9876)); // 96
console.log(FirstLastTrim(8765)); // 85
console.log(FirstLastTrim(1)); // 1

