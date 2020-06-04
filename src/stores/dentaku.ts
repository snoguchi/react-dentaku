import { createSlice } from '@reduxjs/toolkit';
import * as calculator from './lib/calculator';

const slice = createSlice({
  name: 'dentaku',
  initialState: calculator.newCalculator(),
  reducers: {
    digit: (state, action) => {
      return calculator.addDigit(state, action.payload);
    },
    period: (state) => {
      return calculator.addPeriod(state);
    },
    negate: (state) => {
      return calculator.negate(state);
    },
    backspace: (state) => {
      return calculator.removeTail(state);
    },
    clearEntry: (state) => {
      return calculator.clearEntry(state);
    },
    operator: (state, action) => {
      return calculator.putOperator(state, action.payload);
    },
    equal: (state) => {
      return calculator.putEqual(state);
    },
    clear: (state) => {
      return calculator.newCalculator();
    },
  },
});

export const { digit, period, backspace, negate, clearEntry, operator, equal, clear } = slice.actions;

export default slice.reducer;
