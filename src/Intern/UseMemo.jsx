import React, { useState, useMemo } from "react";

function slowCalculation(num) {
  console.log("Calculating...");
  let result = num * 2;
  return result;
}

export default function ExpensiveCalculator() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const result = useMemo(() => slowCalculation(number), [dark]);

  const style = {
    backgroundColor: dark ? "orange" : "white",
    color: dark ? "white" : "green",
  };

  return (
    <div style={style}>
      <h2>Expensive Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        className="border p-2 rounded"
      />
      <p>Result: {result}</p>
      <button
        onClick={() => setDark(!dark)}
      >
        Toggle Theme
      </button>
    </div>
  );
}
