import React, { useState } from "react";
import { CardComponent } from "./CardComponent";

export const FunctionDemo = () => {

  const [count, setCount] = useState(0);

  // simple function
  const test = () => {
    alert("test function called...");
  };

  // function with parameter
  const test2 = (x) => {
    alert("value of x = " + x);
  };

  // function with multiple parameters
  const test3 = (a, b) => {
    alert("Sum = " + (a + b));
  };

  // function returning value
  const getSquare = (n) => {
    return n * n;
  };

  // event object example
  const showEvent = (e) => {
    alert("Button text: " + e.target.innerText);
  };

  // function using state
  const increaseCount = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Function Demo</h1>

      <h2>Count: {count}</h2>

      <button onClick={test}>CLICK</button>

      <br /><br />

      <button onClick={() => test2(100)}>CLICK 2</button>

      <br /><br />

      <button onClick={() => test3(10, 20)}>ADD</button>

      <br /><br />

      <button onClick={() => alert(getSquare(5))}>
        GET SQUARE
      </button>

      <br /><br />

      <button onClick={showEvent}>EVENT</button>

      <br /><br />

      <button onClick={increaseCount}>INCREASE COUNT</button>

       <CardComponent title="FUN DEMO 1" description="FUN DEMO 1 component"></CardComponent>
    </div>
  );
};
