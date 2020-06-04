import { addDigit, addPeriod, removeTail, negate } from './input';

describe('calculatorInput', () => {
  test('addDigit', () => {
    expect(addDigit('', 0)).toBe('0');
    expect(addDigit('0', 1)).toBe('1');
    expect(addDigit('1', 2)).toBe('12');
    expect(addDigit('12', 3)).toBe('123');
    expect(addDigit('12.', 3)).toBe('12.3');
    expect(addDigit('12.3', 4)).toBe('12.34');
    expect(addDigit('-1', 2)).toBe('-12');
  });

  test('addPeriod', () => {
    expect(addPeriod('')).toBe('0.');
    expect(addPeriod('12')).toBe('12.');
    expect(addPeriod('12.3')).toBe('12.3');
  });

  test('removeTail', () => {
    expect(removeTail('')).toBe('');
    expect(removeTail('1')).toBe('0');
    expect(removeTail('12')).toBe('1');
    expect(removeTail('12.')).toBe('12');
    expect(removeTail('12.3')).toBe('12.');
    expect(removeTail('12.34')).toBe('12.3');
    expect(removeTail('-99')).toBe('-9');
    expect(removeTail('-9')).toBe('0');
  });

  test('negate', () => {
    expect(negate('')).toBe('');
    expect(negate('0')).toBe('0');
    expect(negate('1')).toBe('-1');
    expect(negate('-1')).toBe('1');
    expect(negate('-12')).toBe('12');
  });
});
