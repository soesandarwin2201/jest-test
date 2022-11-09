const { stringLength, stringReverse , Calculator , capital} = require('./stringLenght.js');

test('should return the length of string', () => { 
  expect(() => stringLength('kokokalaylay')).toThrow();
 });


test('should return the reverse version of string',() => {
expect(() => stringReverse('?emetaDuoYlliW').toBe('WillYouDateme?'));
});

describe('Calculator add, subtract , multiply , divide', () => {
  test('15 + 15 should return 30', () => {
   expect(Calculator.add(15,15)).toBe(30);
  });
  test('25 + 15 should return 40', () => {
   expect(Calculator.add(25,15)).toBe(40);
  });
  test('1 + 1 should return 2', () => {
   expect(Calculator.add(1,1)).toBe(2);
  });
  test('1 - 1 should return 0', () => {
   expect(Calculator.subtract(1,1)).toBe(0);
  });
  test('10 - 1 should return 9', () => {
   expect(Calculator.subtract(10,1)).toBe(9);
  });
  test('1000 - 2 should return 0', () => {
   expect(Calculator.subtract(1000,2)).toBe(998);
  });
  test('8 * 8 should return 64', () => {
   expect(Calculator.multiply(8,8)).toBe(64);
  });
  test('9 * 9 should return 81', () => {
   expect(Calculator.multiply(9,9)).toBe(81);
  });
  test('2 * 8 should return 16', () => {
   expect(Calculator.multiply(2,8)).toBe(16);
  });
  test('8 / 2 should return 4', () => {
   expect(Calculator.divide(8,2)).toBe(4);
  });
  test('20 / 2 should return 10', () => {
   expect(Calculator.divide(20,2)).toBe(10);
  });
  test('100 / 2 should return 50', () => {
   expect(Calculator.divide(100,2)).toBe(50);
  });
  
});


test('should transform the first letter into capital letter', () => {
  expect(() => capital('ko ko').toBe('Ko ko'));
});
 



