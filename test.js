// test.js
const sum = require('./index');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds -1 + -1 to equal -2', () => {
    expect(sum(-1, -1)).toBe(-2);
});

test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
});

test('adds 100 + 200 to equal 300', () => {
    expect(sum(100, 200)).toBe(300);
});

test('adds -5 + 5 to equal 0', () => {
    expect(sum(-5, 5)).toBe(0);
});

test('adds 0.1 + 0.2 to equal 0.3', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});
