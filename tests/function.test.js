const { add } = require('../functions');

test('輸入一個整數 6, 輸出應該是 "1 2 fizz 4 5 fizz"', () => {
  const result = '1 2 fizz 4 5 fizz';
  expect(add(6)).toEqual(result);
});
