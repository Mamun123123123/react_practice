import { useState } from "react";
import React from "react";

const Basic_controlled = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    city: "",
  });

  const [showData, setShowData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handle = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const handleAll = () => {
    if (editIndex !== null) {
     
      const updatedData = [...showData];
      updatedData[editIndex] = formData;
      setShowData(updatedData);
      setEditIndex(null);
    } 
  };


  const handleDelete = (index) => {
    const updatedData = showData.filter((_, i) => i !== index);
    setShowData(updatedData);
  };

  const handleEdit = (index) => {
    setFormData(showData[index]);
    setEditIndex(index);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handle}
        placeholder="Enter your Name"
        className="border p-2 m-1"
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handle}
        placeholder="Enter your Age"
        className="border p-2 m-1"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handle}
        placeholder="Enter your Email"
        className="border p-2 m-1"
      />
      <select
        name="city"
        value={formData.city}
        onChange={handle}
        className="border p-2 m-1"
      >
        <option value="">Select City</option>
        <option value="Dhaka">Dhaka</option>
        <option value="Chittagong">Chittagong</option>
        <option value="Khulna">Khulna</option>
      </select>

      <button
        onClick={handleAll}
        className="bg-green-500 text-white px-4 py-1 rounded m-2"
      >
        {editIndex !== null ? "Update" : "Submit"}
      </button>

      <ul className="mt-4">
        {showData.map((item, index) => (
          <li key={index} className="mb-2">
            {item.name} - {item.age} - {item.email} - {item.city}
            <button
              onClick={() => handleEdit(index)}
              className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white px-2 py-1 rounded ml-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basic_controlled;
