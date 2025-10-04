import { useState } from "react";
import React from "react";

const Form_crud = () => {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
  });

  const handle = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const [showData, setShowData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAll = () => {
    if (editIndex !== null) {
 
      const update = [...showData];
      update[editIndex] = FormData;
      setShowData(update);
      setEditIndex(null);
    } else {
  
      setShowData([...showData, FormData]);
    }

    
    setFormData({ name: "", email: "", city: "" });
  };

  const Idithandle = (index) => {
    setFormData(showData[index]);
    setEditIndex(index);
  };

  const Deletehandle = (index) => {
    const newww = showData.filter((_, i) => i !== index);
    setShowData(newww);
  };

  return (
    <div>
      <h1>Enter Your Details</h1>
      <div>
        <label htmlFor="name">Enter your Name</label>
        <input
          type="text"
          name="name"
          value={FormData.name}
          onChange={handle}
          placeholder="Enter Your Name"
        />
        <label htmlFor="email">Enter Your Email</label>
        <input
          type="email"
          name="email"
          value={FormData.email}
          onChange={handle}
          placeholder="Enter Your Email"
        />
        <select name="city" value={FormData.city} onChange={handle}>
          <option value="">Select City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Khulna">Khulna</option>
          <option value="Chittagong">Chittagong</option>
          <option value="Comilla">Comilla</option>
        </select>
        <button onClick={handleAll}>
          {editIndex !== null ? "Update" : "Submit"}
        </button>

        <h1>All Details</h1>
        <ul>
          {showData.map((item, index) => {
            return (
              <li key={index}>
                {index + 1}. {item.name} - {item.email} - {item.city}
                <button onClick={() => Idithandle(index)}>Edit</button>
                <button onClick={() => Deletehandle(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Form_crud;
