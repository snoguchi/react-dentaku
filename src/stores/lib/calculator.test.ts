import {
  newCalculator,
  addDigit,
  addPeriod,
  removeTail,
  negate,
  clearEntry,
  putOperator,
  putEqual,
} from './calculator';
import { Digit } from './input';
import { Operator } from './processor';

const eq = (expr: string, expected: string) => {
  let calc = newCalculator();
  expr.split(/\s+/).forEach((tok) => {
    if (tok === '=') {
      calc = putEqual(calc);
    } else if (/^[+\-*/]$/.test(tok)) {
      calc = putOperator(calc, tok as Operator);
    } else if (tok === 'NEG') {
      calc = negate(calc);
    } else if (tok === 'BS') {
      calc = removeTail(calc);
    } else if (tok === 'CE') {
      calc = clearEntry(calc);
    } else if (isFinite(+tok)) {
      tok.split('').forEach((v) => {
        if (v === '.') {
          calc = addPeriod(calc);
        } else {
          calc = addDigit(calc, +v as Digit);
        }
      });
    } else {
      throw new Error('Illegal expression');
    }
  });

  expect(calc.a).toBe(expected);
};

describe('calculator', () => {
  test('simple', () => {
    eq('4 - 6 =', '-2');
    eq('1 + 2 / 3 * 4 - 5.5 =', '-1.5');
    eq('2 * 3 NEG =', '-6');
    eq('2 + 3 CE 4 =', '6');
    eq('2 + - 7 =', '-5');
    eq('123 BS 2 =', '122');
    eq('2 BS 3 * 3 =', '9');
  });

  test('Equal => Equal', () => {
    eq('100 * 1.03 =', '103');
    eq('100 * 1.03 = =', '106.09');
    eq('100 * 1.03 = = =', '109.2727');
  });

  test('Operator => Equal', () => {
    eq('1 + =', '2');
    eq('1 + = + =', '4');
    eq('1 + = + = + =', '8');
  });

  test('Number => Equal', () => {
    eq('1 + 1 =', '2');
    eq('1 + 1 = 5 =', '6');
    eq('1 + 1 = 5 = 10 =', '11');
  });

  test('divided by zero', () => {
    eq('100 / 0 =', 'Infinity');
    eq('0 / 0 =', 'NaN');
  });

  test('arbitrary precision', () => {
    eq('0.7 * 1400 =', '980');
    eq('99999999999999 * =', '9999999999999800000000000001');
    eq('1 / 3 =', '0.33333333333333333333');
  });
});
