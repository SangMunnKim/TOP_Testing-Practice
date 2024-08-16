const calculator = require('./calculator');

test('Simple calculator test', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(3, 2)).toBe(1);
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.multiply(2, 3)).toBe(6);
});