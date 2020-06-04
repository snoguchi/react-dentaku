import { Operator, Register, newRegister, putNumber, putOperator, putEqual } from './processor';

describe('processor', () => {
  test('transition', () => {
    let reg = newRegister();
    expect(reg).toEqual({ a: '0', b: '0', op: 'nil', state: 'EMPTY' });

    reg = putNumber(reg, 123);
    expect(reg).toEqual({ a: '123', b: '0', op: 'nil', state: 'ONE_NUM' });

    reg = putOperator(reg, '+');
    expect(reg).toEqual({ a: '123', b: '0', op: '+', state: 'ONE_OP' });

    reg = putNumber(reg, 456);
    expect(reg).toEqual({ a: '123', b: '456', op: '+', state: 'TWO_NUM' });

    reg = putEqual(reg);
    expect(reg).toEqual({ a: '579', b: '456', op: '+', state: 'ANSWER' });

    reg = putNumber(reg, 999);
    expect(reg).toEqual({ a: '999', b: '456', op: '+', state: 'NEXT_NUM' });
  });

  test('EMPTY', () => {
    let reg: Register;

    reg = { a: '0', b: '0', op: 'nil', state: 'EMPTY' };
    reg = putNumber(reg, 123);
    expect(reg).toEqual({ a: '123', b: '0', op: 'nil', state: 'ONE_NUM' });

    reg = { a: '0', b: '0', op: 'nil', state: 'EMPTY' };
    reg = putOperator(reg, '+');
    expect(reg).toEqual({ a: '0', b: '0', op: '+', state: 'ONE_OP' });

    reg = { a: '0', b: '0', op: 'nil', state: 'EMPTY' };
    reg = putEqual(reg);
    expect(reg).toEqual({ a: '0', b: '0', op: 'nil', state: 'ANSWER' });
  });

  test('ONE_NUM', () => {
    let reg: Register;

    reg = { a: '123', b: '0', op: 'nil', state: 'ONE_NUM' };
    reg = putOperator(reg, '+');
    expect(reg).toEqual({ a: '123', b: '0', op: '+', state: 'ONE_OP' });

    reg = { a: '123', b: '0', op: 'nil', state: 'ONE_NUM' };
    reg = putEqual(reg);
    expect(reg).toEqual({ a: '123', b: '0', op: 'nil', state: 'ANSWER' });
  });

  test('ONE_OP', () => {
    let reg: Register;

    reg = { a: '123', b: '0', op: '+', state: 'ONE_OP' };
    reg = putNumber(reg, '456');
    expect(reg).toEqual({ a: '123', b: '456', op: '+', state: 'TWO_NUM' });

    reg = { a: '123', b: '0', op: '+', state: 'ONE_OP' };
    reg = putOperator(reg, '*');
    expect(reg).toEqual({ a: '123', b: '0', op: '*', state: 'ONE_OP' });

    reg = { a: '123', b: '0', op: '+', state: 'ONE_OP' };
    reg = putEqual(reg);
    expect(reg).toEqual({ a: '246', b: '0', op: '+', state: 'ANSWER' });
  });

  test('TWO_NUM', () => {
    let reg: Register;

    reg = { a: '123', b: '456', op: '+', state: 'TWO_NUM' };
    reg = putOperator(reg, '*');
    expect(reg).toEqual({ a: '579', b: '456', op: '*', state: 'ONE_OP' });

    reg = { a: '123', b: '456', op: '+', state: 'TWO_NUM' };
    reg = putEqual(reg);
    expect(reg).toEqual({ a: '579', b: '456', op: '+', state: 'ANSWER' });
  });

  test('ANSWER', () => {
    let reg: Register;

    reg = { a: '579', b: '456', op: '+', state: 'ANSWER' };
    reg = putNumber(reg, '-100');
    expect(reg).toEqual({ a: '-100', b: '456', op: '+', state: 'NEXT_NUM' });

    reg = { a: '579', b: '456', op: '+', state: 'ANSWER' };
    reg = putOperator(reg, '*');
    expect(reg).toEqual({ a: '579', b: '456', op: '*', state: 'ONE_OP' });

    reg = { a: '579', b: '456', op: '+', state: 'ANSWER' };
    reg = putEqual(reg);
    expect(reg).toEqual({ a: '1035', b: '456', op: '+', state: 'ANSWER' });
  });

  test('NEXT_NUM', () => {
    let reg: Register;

    reg = { a: '999', b: '456', op: '+', state: 'NEXT_NUM' };
    reg = putOperator(reg, '*');
    expect(reg).toEqual({ a: '999', b: '456', op: '*', state: 'ONE_OP' });

    reg = { a: '999', b: '456', op: '+', state: 'NEXT_NUM' };
    reg = putEqual(reg);
    expect(reg).toEqual({ a: '1455', b: '456', op: '+', state: 'ANSWER' });
  });
});
