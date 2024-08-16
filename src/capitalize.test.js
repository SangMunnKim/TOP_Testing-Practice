const capitalize = require('./capitalize');

test('Takes a string and returns it with the first character capitalized.', () => {
    expect(capitalize("hello world")).toBe("Hello world");
    expect(capitalize("theOdinProject")).toBe("TheOdinProject");
});

