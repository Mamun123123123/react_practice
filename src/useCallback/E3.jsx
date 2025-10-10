import React, { useState, memo } from "react";

const UserCard = memo(function UserCard({ name, age }) {
  console.log("Rendering UserCard:", name);
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
});

export default function E3() {
  const [count, setCount] = useState(0);
  const [user] = useState({ name: "Mamun", age: 23 });

  return (
    <div>
      <h2>React.memo Practice</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment: {count}
      </button>
      <UserCard name={user.name} age={user.age} />
    </div>
  );
}
