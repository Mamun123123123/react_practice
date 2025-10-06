import React, { useState } from "react";

export default function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Controlled Form</h2>
      <form>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" /> <br />
        <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" /> <br />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select> <br />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" /> <br />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" /> <br />
        <textarea name="address" value={formData.address} onChange={handleChange}></textarea> <br />
        <input name="city" value={formData.city} onChange={handleChange} placeholder="City" /> <br />
        <input name="state" value={formData.state} onChange={handleChange} placeholder="State" /> <br />
        <input name="zip" value={formData.zip} onChange={handleChange} placeholder="Zip" /> <br />
        <input name="country" value={formData.country} onChange={handleChange} placeholder="Country" /> <br />
        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
      </form>

      <h3>Show</h3>
       <p><b>Name:</b> {formData.name}</p>
      <p><b>Age:</b> {formData.age}</p>
      <p><b>Gender:</b> {formData.gender}</p>
      <p><b>Email:</b> {formData.email}</p>
      <p><b>Phone:</b> {formData.phone}</p>
      <p><b>Address:</b> {formData.address}</p>
      <p><b>City:</b> {formData.city}</p>
      <p><b>State:</b> {formData.state}</p>
      <p><b>Zip:</b> {formData.zip}</p>
      <p><b>Country:</b> {formData.country}</p>
      <p><b>Message:</b> {formData.message}</p>
    </div>
  );
}
