import React, { useRef, useState } from "react";

export default function BMICalculator() {
  const heightRef = useRef();
  const weightRef = useRef();
  const [bmi, setBmi] = useState(null);

  const handleCalculate = () => {
    const height = parseFloat(heightRef.current.value) / 100;
    const weight = parseFloat(weightRef.current.value);
    const result = (weight / (height * height)).toFixed(2);
    setBmi(result);
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <input ref={heightRef} placeholder="Enter height" /> <br />
      <input ref={weightRef} placeholder="Enter weight" /> <br />
      <button onClick={handleCalculate}>Calculate</button>
      {bmi && <h3>{bmi}</h3>}
    </div>
  );
}
