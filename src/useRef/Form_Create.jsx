import React, { useRef, useState } from "react";

export default function App() {
  const inputsRef = useRef({});
  const [users, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const fields = [
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
  ];

  const handleChange = (e) => {
    inputsRef.current[e.target.name] = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...inputsRef.current };

    if (editingIndex !== null) {
      // update
      setUsers((prev) =>
        prev.map((user, index) => (index === editingIndex ? newUser : user))
      );
      setEditingIndex(null);
    } else {
      // add
      setUsers((prev) => [...prev, newUser]);
    }

    // clear values
    fields.forEach((field) => {
      if (inputsRef.current[field]) inputsRef.current[field] = "";
      if (inputsRef.current[field + "_ref"])
        inputsRef.current[field + "_ref"].value = "";
    });
  };

  const handleEdit = (index) => {
    const user = users[index];
    setEditingIndex(index);

    fields.forEach((field) => {
      if (inputsRef.current[field + "_ref"]) {
        inputsRef.current[field + "_ref"].value = user[field] || "";
      }
      inputsRef.current[field] = user[field] || "";
    });
  };

  const handleDelete = (index) => {
    setUsers((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96 mb-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          {editingIndex !== null ? "Edit User" : "Add User"}
        </h2>

        {fields.map((field) => (
          <input
            key={field}
            name={field}
            placeholder={`Enter ${field}`}
            className="w-full border p-2 mb-3 rounded"
            onChange={handleChange}
            ref={(el) => (inputsRef.current[field + "_ref"] = el)}
          />
        ))}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {editingIndex !== null ? "Update" : "Add"}
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
                <div className="mt-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
