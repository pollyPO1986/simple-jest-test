const { calculator, getMagicNumber } = require('../homework');

test('func01-1：1-30 範圍內，吐出可以被 5 整除的數列', () => {
  const range = 30;
  const divisor = 5;
  expect(calculator(range, divisor)).toEqual([5, 10, 15, 20, 25, 30]);
});

test('func01-2：同 func01-1 情境，當除數為 -5 時，結果要與上方結果相同', () => {
  const range = 30;
  const divisor = -5;

  expect(calculator(range, divisor)).toEqual([5, 10, 15, 20, 25, 30]);
});

test('func01-3：當除數為 0，吐出空數列', () => {
  const range = 30;
  const divisor = 0;

  expect(calculator(range, divisor)).toEqual([]);
});

test('func01-4：當區間範圍與除數為 0，吐出空數列', () => {
  const range = 0;
  const divisor = 0;

  expect(calculator(range, divisor)).toEqual([]);
});

test('func02-1：1-20 範圍內，吐出沒有同時被 2 跟 5 整除的數字的數列', () => {
  const range = 20;
  const factor1 = 2;
  const factor2 = 5;

  expect(getMagicNumber(range, factor1, factor2)).toEqual([2, 4, 5, 6, 8, 12, 14, 15, 16, 18]);
});

test('func02-2：同 func02-1 情境，顛倒輸入 5、2 的順序，結果要與 func02-1 相同', () => {
  const range = 20;
  const factor1 = 5;
  const factor2 = 2;

  expect(getMagicNumber(range, factor1, factor2)).toEqual([2, 4, 5, 6, 8, 12, 14, 15, 16, 18]);
});

test('func02-3：同 func02-1 情境，輸入 -2、5 的順序，結果要與 func02-1 相同', () => {
  const range = 20;
  const factor1 = -2;
  const factor2 = 5;

  expect(getMagicNumber(range, factor1, factor2)).toEqual([2, 4, 5, 6, 8, 12, 14, 15, 16, 18]);
});

test('func02-4：1-20 範圍內，數值為 0、5 ，僅吐出可被 5 整除的數列', () => {
  const range = 20;
  const factor1 = 0;
  const factor2 = 5;

  expect(getMagicNumber(range, factor1, factor2)).toEqual([5, 10, 15, 20]);
});

test('func02-5：1-20 範圍內，數值為 0、0 ，吐出空數列', () => {
  const range = 20;
  const factor1 = 0;
  const factor2 = 0;

  expect(getMagicNumber(range, factor1, factor2)).toEqual([]);
});

test('func02-6：當範圍與數值皆為 0 ，吐出空數列', () => {
  const range = 0;
  const factor1 = 0;
  const factor2 = 0;

  expect(getMagicNumber(range, factor1, factor2)).toEqual([]);
});
