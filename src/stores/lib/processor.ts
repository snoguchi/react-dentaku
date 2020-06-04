import { BigNumber } from 'bignumber.js';

export type Operator = '+' | '-' | '*' | '/' | 'nil';

export type State = 'EMPTY' | 'ONE_NUM' | 'ONE_OP' | 'TWO_NUM' | 'ANSWER' | 'NEXT_NUM';

export type Register = {
  a: string;
  b: string;
  op: Operator;
  state: State;
};

type Operation = (lhs: string, rhs: string) => string;

const operations: { [op in Operator]: Operation } = {
  '+': (lhs, rhs) => new BigNumber(lhs).plus(rhs).toString(10),
  '-': (lhs, rhs) => new BigNumber(lhs).minus(rhs).toString(10),
  '*': (lhs, rhs) => new BigNumber(lhs).times(rhs).toString(10),
  '/': (lhs, rhs) => new BigNumber(lhs).dividedBy(rhs).toString(10),
  nil: () => {
    throw new Error('no operator');
  },
};

type Transition = {
  putNumber: (reg: Register, num: string) => Register;
  putOperator: (reg: Register, op: Operator) => Register;
  putEqual: (reg: Register) => Register;
};

const transitions: { [state in State]: Transition } = {
  EMPTY: {
    putNumber: (reg, num) => ({ ...reg, a: num, state: 'ONE_NUM' }),
    putOperator: (reg, op) => ({ ...reg, op, state: 'ONE_OP' }),
    putEqual: (reg) => ({ ...reg, state: 'ANSWER' }),
  },
  ONE_NUM: {
    putNumber: () => {
      throw new Error('unexpected trigger <Number> in <ONE_NUM> state');
    },
    putOperator: (reg, op) => ({ ...reg, op, state: 'ONE_OP' }),
    putEqual: (reg) => ({ ...reg, state: 'ANSWER' }),
  },
  ONE_OP: {
    putNumber: (reg, num) => ({ ...reg, b: num, state: 'TWO_NUM' }),
    putOperator: (reg, op) => ({ ...reg, op, state: 'ONE_OP' }),
    putEqual: (reg) => ({ ...reg, a: operations[reg.op](reg.a, reg.a), state: 'ANSWER' }),
  },
  TWO_NUM: {
    putNumber: () => {
      throw new Error('unexpected trigger <Number> in <TWO_NUM> state');
    },
    putOperator: (reg, op) => ({ ...reg, a: operations[reg.op](reg.a, reg.b), op, state: 'ONE_OP' }),
    putEqual: (reg) => ({ ...reg, a: operations[reg.op](reg.a, reg.b), state: 'ANSWER' }),
  },
  ANSWER: {
    putNumber: (reg, num) => ({ ...reg, a: num, state: 'NEXT_NUM' }),
    putOperator: (reg, op) => ({ ...reg, op, state: 'ONE_OP' }),
    putEqual: (reg) => ({ ...reg, a: operations[reg.op](reg.a, reg.b), state: 'ANSWER' }),
  },
  NEXT_NUM: {
    putNumber: () => {
      throw new Error('unexpected trigger <Number> in <NEXT_NUM> state');
    },
    putOperator: (reg, op) => ({ ...reg, op, state: 'ONE_OP' }),
    putEqual: (reg) => ({ ...reg, a: operations[reg.op](reg.a, reg.b), state: 'ANSWER' }),
  },
};

export const newRegister = (): Register => {
  return { a: '0', b: '0', op: 'nil', state: 'EMPTY' };
};

export const putNumber = (reg: Register, num: string | number): Register => {
  return transitions[reg.state].putNumber(reg, String(num));
};

export const putOperator = (reg: Register, op: Operator): Register => {
  return transitions[reg.state].putOperator(reg, op);
};

export const putEqual = (reg: Register): Register => {
  return transitions[reg.state].putEqual(reg);
};
