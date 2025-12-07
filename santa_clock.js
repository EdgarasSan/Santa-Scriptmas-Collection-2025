// Santa's Midnight Clock Countdown

function calculateTimeSinceMidnight(x, y) {
  // x = hours, y = minutes
  
  // Calculate minutes passed since midnight
  const m = x * 60 + y;
  
  // Calculate seconds passed since midnight
  const s = m * 60;
  
  return { m, s };
}

// Example: Clock shows 3 hours and 5 minutes
const x = 3;
const y = 5;

const result = calculateTimeSinceMidnight(x, y);

console.log(`Clock shows: ${x} hours and ${y} minutes`);
console.log(`Minutes passed since midnight: m = ${result.m}`);
console.log(`Seconds passed since midnight: s = ${result.s}`);

// Test with other times
console.log('\n--- More Examples ---');

const testCases = [
  { x: 0, y: 0 },   // Midnight
  { x: 12, y: 30 }, // 12:30
  { x: 23, y: 59 }  // Almost midnight
];

testCases.forEach(({ x, y }) => {
  const result = calculateTimeSinceMidnight(x, y);
  console.log(`\n${x}:${y.toString().padStart(2, '0')} → m = ${result.m}, s = ${result.s}`);
});