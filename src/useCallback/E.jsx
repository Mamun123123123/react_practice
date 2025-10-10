import React, { useState } from "react";

function Child({ onClick }) {
  console.log("Child render");
  return <button onClick={onClick}>Click Me</button>;
}

export default function E() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Child onClick={handleClick} /><br />
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}
