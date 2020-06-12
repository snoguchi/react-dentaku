import React from 'react';
import Display from './Display';
import NumPad from './NumPad';
import './Dentaku.css';

const Dentaku = () => {
  return (
    <div className="frame">
      <Display />
      <NumPad />
    </div>
  );
};

export default Dentaku;
