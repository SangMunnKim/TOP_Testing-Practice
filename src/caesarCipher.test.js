const caesarCipher = require('./caesarCipher');

test('Caesarcipher function test', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('XYZ', 3)).toBe('ABC');
    expect(caesarCipher('abcdefg', 56)).toBe('efghijk');
    expect(caesarCipher('abcdefg', -29)).toBe('xyzabcd');
})