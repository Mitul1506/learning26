import React, { useState } from "react";

export const UseStateDemo1 = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prev => prev + 1);
  };

  const decrease = () => {
    setCount(prev => prev - 1);
  };

  const increaseByFive = () => {
    setCount(prev => prev + 5);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>USE STATE DEMO 1</h1>
      <h2>Count: {count}</h2>

      <button onClick={increase}>+</button>
      <button onClick={decrease} style={{ margin: "0 10px" }}>-</button>
      <button onClick={increaseByFive}>+5</button>
      <button onClick={reset} style={{ marginLeft: "10px" }}>Reset</button>
    </div>
  );
};
