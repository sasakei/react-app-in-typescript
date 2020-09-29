import React, { Component, ReactFragment } from 'react';

const Counter: React.FC<{}> = () => {
  const value = 0;
  return (
    <div>
      <div>value: {value}</div>
      <button>+1</button>
      <button>-1</button>
    </div>
  );
};

export default Counter;
