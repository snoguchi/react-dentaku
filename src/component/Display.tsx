import React from 'react';
import { useSelector } from '../stores';
import './Display.css';

const Display = () => {
  const answer = useSelector((state) => state.dentaku.a);
  const input = useSelector((state) => state.dentaku.input);

  return <div className="display">{input === '' ? answer : input}</div>;
};

export default Display;
