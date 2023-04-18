import React, { useState } from "react";

const Count = ({ initial }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const sign = () => {
    setCount((prev) => prev * -1);
  };

  return (
    <div>
      <h1>
        Count : <h3 data-testid="count">{count}</h3>
      </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={sign}>Sign</button>
    </div>
  );
};

export default Count;
