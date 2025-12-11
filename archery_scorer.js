const test = require('node:test');
const assert = require('node:assert/strict');

// Silence example usage logs emitted on module import
const originalLog = console.log;
console.log = () => {};

const { calculateArcheryScore, calculateDistance } = require('../archery_scorer');

test.after(() => {
  console.log = originalLog;
});

test('returns full points for bullseye when arrow hits center', () => {
  const baseTarget = {
    xc: 50,
    yc: 50,
    rings: [
      { radius: 5, points: 100 },
      { radius: 10, points: 50 },
      { radius: 15, points: 25 },
      { radius: 20, points: 10 }
    ]
  };
  const score = calculateArcheryScore(baseTarget, 50, 50);
  assert.equal(score, 100);
});

test('returns half points when arrow lands exactly on bullseye boundary', () => {
  const baseTarget = {
    xc: 50,
    yc: 50,
    rings: [
      { radius: 5, points: 100 },
      { radius: 10, points: 50 },
      { radius: 15, points: 25 },
      { radius: 20, points: 10 }
    ]
  };
  const score = calculateArcheryScore(baseTarget, 55, 50); // distance 5
  assert.equal(score, 50);
});

test('returns correct points when inside inner ring but outside bullseye', () => {
  const baseTarget = {
    xc: 50,
    yc: 50,
    rings: [
      { radius: 5, points: 100 },
      { radius: 10, points: 50 },
      { radius: 15, points: 25 },
      { radius: 20, points: 10 }
    ]
  };
  const score = calculateArcheryScore(baseTarget, 58, 50); // distance 8
  assert.equal(score, 50);
});

test('returns 0 when arrow is outside all rings', () => {
  const baseTarget = {
    xc: 50,
    yc: 50,
    rings: [
      { radius: 5, points: 100 },
      { radius: 10, points: 50 },
      { radius: 15, points: 25 },
      { radius: 20, points: 10 }
    ]
  };
  const score = calculateArcheryScore(baseTarget, 75, 50); // distance 25
  assert.equal(score, 0);
});

test('handles unsorted rings array correctly', () => {
  const unsortedTarget = {
    xc: 0,
    yc: 0,
    rings: [
      { radius: 20, points: 10 },
      { radius: 5, points: 100 },
      { radius: 15, points: 25 },
      { radius: 10, points: 50 }
    ]
  };
  const score = calculateArcheryScore(unsortedTarget, 0, 0);
  assert.equal(score, 100);
});

test('prioritizes innermost ring scoring even if outer ring has higher points', () => {
  const target = {
    xc: 0,
    yc: 0,
    rings: [
      { radius: 20, points: 1000 },
      { radius: 5, points: 10 }
    ]
  };
  const score = calculateArcheryScore(target, 1, 1); // distance ~1.414 < 5
  assert.equal(score, 10);
});

test('awards half points when distance is within epsilon of ring radius', () => {
  const target = {
    xc: 0,
    yc: 0,
    rings: [{ radius: 1, points: 10 }]
  };
  const delta = 5e-11; // less than default epsilon 1e-10
  const score = calculateArcheryScore(target, 1 + delta, 0);
  assert.equal(score, 5);
});

test('works with negative coordinates', () => {
  const target = {
    xc: -10,
    yc: -10,
    rings: [
      { radius: 5, points: 30 },
      { radius: 10, points: 20 }
    ]
  };
  const score = calculateArcheryScore(target, -13, -14); // distance 5
  assert.equal(score, 15); // half points for boundary at radius 5
});

test('calculateDistance computes Euclidean distance correctly', () => {
  assert.equal(calculateDistance(0, 0, 3, 4), 5);
});
