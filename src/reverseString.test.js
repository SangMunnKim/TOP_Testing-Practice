const reverseString = require('./reverseString');

test('Takes a string and reverses the string', () => {
    expect(reverseString("abcdef")).toBe("fedcba");
    expect(reverseString("Hello World")).toBe("dlroW olleH");
})