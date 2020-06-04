import * as processor from './processor';
import * as input from './input';

export type Calculator = processor.Register & {
  input: string;
};

export const newCalculator = (): Calculator => {
  return { ...processor.newRegister(), input: '' };
};

export const addDigit = (calc: Calculator, digit: input.Digit): Calculator => {
  return { ...calc, input: input.addDigit(calc.input, digit) };
};

export const addPeriod = (calc: Calculator): Calculator => {
  return { ...calc, input: input.addPeriod(calc.input) };
};

export const removeTail = (calc: Calculator): Calculator => {
  return { ...calc, input: input.removeTail(calc.input) };
};

export const negate = (calc: Calculator): Calculator => {
  return { ...calc, input: input.negate(calc.input) };
};

export const clearEntry = (calc: Calculator): Calculator => {
  return { ...calc, input: '' };
};

export const putOperator = (calc: Calculator, op: processor.Operator): Calculator => {
  if (calc.input !== '') {
    calc = { ...processor.putNumber(calc, calc.input), input: '' };
  }
  return { ...processor.putOperator(calc, op), input: '' };
};

export const putEqual = (calc: Calculator): Calculator => {
  if (calc.input !== '') {
    calc = { ...processor.putNumber(calc, calc.input), input: '' };
  }
  return { ...processor.putEqual(calc), input: '' };
};
