import React, { useMemo, useState } from "react";

export default function UserCrud() {
  const [users, setUsers] = useState([
    { name: "Mamun", age: 23 },
    { name: "Masum", age: 30 },
    { name: "Rahim", age: 27 },
  ]);

  const [formData, setFormData] = useState({ name: "", age: "" });
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddOrUpdate = () => {
    if (!formData.name || !formData.age) return alert("Please fill all fields");

    if (editIndex !== null) {
      const updated = [...users];
      updated[editIndex] = formData;
      setUsers(updated);
      setEditIndex(null);
    } else {

      setUsers([...users, formData]);
    }

    setFormData({ name: "", age: "" });
  };

  const handleDelete = (index) => {
    const updated = [...users];
    updated.splice(index, 1);
    setUsers(updated);
  };


  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);
  };

 
  const filteredUsers = useMemo(() => {
    const filtered = users.filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );
    return filtered.sort((a, b) => a.age - b.age);
  }, [users, search]);

  return (
    <div>
      <h2>User Management</h2>
      <input
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="age"
        placeholder="Enter age"
        value={formData.age}
        onChange={handleChange}
      />
      <button onClick={handleAddOrUpdate}>
        {editIndex !== null ? "Update" : "Add"}
      </button>
      <div>
        <input
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((u, i) => (
            <tr key={i}>
              <td>{u.name}</td>
              <td>{u.age}</td>
              <td>
                <button onClick={() => handleEdit(i)}>Edit</button>
                <button onClick={() => handleDelete(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
