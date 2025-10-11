import React, { useState, useMemo, useCallback } from "react";

const Child = React.memo(({ onIncrement }) => {
  console.log("Child rendered!");
  return <button onClick={onIncrement}>Add</button>;
});

export default function Mixed() {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => {
    console.log("Calculating double count...");
    return count * 2;
  }, [count]);

  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div >
      <h2>Combined </h2>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <Child onIncrement={handleIncrement} />
    </div>
  );
}
