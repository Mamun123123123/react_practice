import React, { useRef, useState } from "react";

export default function Form_using_useRef() {
  const inputsRef = useRef({}); 
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    inputsRef.current[e.target.name] = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const newUser = { ...inputsRef.current };

    setUsers([...users, newUser]);
 
    Object.keys(inputsRef.current).forEach((key) => (inputsRef.current[key] = ""));
    e.target.reset();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96 mb-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add User</h2>

        {[
          "name",
          "email",
          "age",
          "phone",
          "city",
          "country",
          "job",
          "company",
          "hobby",
          "website",
        ].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={`Enter ${field}`}
            className="w-full border p-2 mb-3 rounded"
            onChange={handleChange}
          />
        ))}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>

      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h3 className="text-xl font-bold mb-3">User List</h3>
        {users.length === 0 ? (
          <p className="text-gray-500">No users added yet.</p>
        ) : (
          <ul className="space-y-2">
            {users.map((user, index) => (
              <li key={index} className="border p-2 rounded bg-gray-50">
                {Object.entries(user).map(([key, value]) => (
                  <p key={key}>
                    <span className="font-semibold">{key}: </span>
                    {value}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
