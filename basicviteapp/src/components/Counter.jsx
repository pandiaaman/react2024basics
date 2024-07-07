import React from "react";
import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  function incrementCount() {
    setCount(count + 1);
  }
  return (
    <>
      <h2>counter program</h2>
      {/* if we use incrementCount() then it will keep calling the function and there will be too many renders */}
      <button onClick={incrementCount}>{count}</button>
    </>
  );
}
