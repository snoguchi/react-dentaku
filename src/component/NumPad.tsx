import React from 'react';
import { useDispatch } from 'react-redux';
import { digit, period, backspace, operator, negate, equal, clearEntry, clear } from '../stores/dentaku';
import './NumPad.css';

const NumPad = () => {
  const dispatch = useDispatch();

  return (
    <div className="frame">
      <button onClick={() => dispatch(clearEntry())}>CE</button>
      <button onClick={() => dispatch(clear())}>C</button>
      <button onClick={() => dispatch(backspace())}>&larr;</button>
      <button onClick={() => dispatch(operator('/'))}>&divide;</button>

      <button onClick={() => dispatch(digit(7))}>7</button>
      <button onClick={() => dispatch(digit(8))}>8</button>
      <button onClick={() => dispatch(digit(9))}>9</button>
      <button onClick={() => dispatch(operator('*'))}>&times;</button>

      <button onClick={() => dispatch(digit(4))}>4</button>
      <button onClick={() => dispatch(digit(5))}>5</button>
      <button onClick={() => dispatch(digit(6))}>6</button>
      <button onClick={() => dispatch(operator('-'))}>-</button>

      <button onClick={() => dispatch(digit(1))}>1</button>
      <button onClick={() => dispatch(digit(2))}>2</button>
      <button onClick={() => dispatch(digit(3))}>3</button>
      <button onClick={() => dispatch(operator('+'))}>+</button>

      <button onClick={() => dispatch(negate())}>&plusmn;</button>
      <button onClick={() => dispatch(digit(0))}>0</button>
      <button onClick={() => dispatch(period())}>.</button>
      <button onClick={() => dispatch(equal())}>=</button>
    </div>
  );
};

export default NumPad;
