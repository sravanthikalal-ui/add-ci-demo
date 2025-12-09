const add = require('./index');

test("Test Add Function", () => {
  expect(add(2, 3)).toBe(5);
});
