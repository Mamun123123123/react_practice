import React, { useCallback, useState } from 'react';

const Change = () => {
  const [text, setText] = useState("You Are Fail");

  const handleChange = useCallback(() => {
    setText("You Are Right");
  }, []);

  return (
    <div>
      <h1>This is Changing ..........</h1>
      <button onClick={handleChange}>Change</button>
      <p>{text}</p>
    </div>
  );
};

export default Change;
