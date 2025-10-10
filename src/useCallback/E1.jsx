import React, { useState, useCallback } from "react";

function Child({ onClick }) {
  console.log("Child render");
  return <button onClick={onClick}>Click Me</button>;
}

export default function E1() {
  const [count, setCount] = useState(0);

 
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); 

  return (
    <div>
      <h2>Count: {count}</h2>
      <Child onClick={handleClick} /><br />
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}
