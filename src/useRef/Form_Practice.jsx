import React, { useRef, useState } from "react";

export default function Form_F() {
  const fields = ["name", "email", "age"];
  const [users, setUsers] = useState([]);
  const inputRefs = useRef({});

  const handleAdd = () => {
    const newUser = {};
    fields.forEach((field) => {
      newUser[field] = inputRefs.current[field].value;
      inputRefs.current[field].value = "";
    });
    setUsers([...users, newUser]);
  };

  const handleDelete = (index) => {
    const updated = [...users];
    updated.splice(index, 1);
    setUsers(updated);
  };

  const handleEdit = (index) => {
    const user = users[index];
    fields.forEach((field) => {
      inputRefs.current[field].value = user[field];
    });
    handleDelete(index);
  };

  return (
    <div>
      <h2>Add User</h2>
      {fields.map((field) => (
        <div key={field}>
          <input
            ref={(el) => (inputRefs.current[field] = el)}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          />
          <br />
        </div>
      ))}
      <button onClick={handleAdd}>Add</button>

      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {fields.map((field) => (
              <span key={field} style={{ marginRight: "10px" }}>
                {user[field]}
              </span>
            ))}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
