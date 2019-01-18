const minus = require('./minus');

test('5 - 3 เท่ากับ 2',()=>{
  expect(minus(5,3)).toBe(2);
});

test('10 - 5 เท่ากับ 5',()=>{
  expect(minus(10,5)).toBe(5);
});

test('1 - 9 เท่ากับ -8',()=>{
  expect(minus(1,9)).toBe(-8);
});

test('999 - 998 เท่ากับ 1',()=>{
  expect(minus(999,998)).toBe(1);
});

test('100 - 59 เท่ากับ 2',()=>{
  expect(minus(100,59)).toBe(41);
});