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

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); 
    setFormData({
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
  };

  return (
    <div>
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" /> <br />
        <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" /> <br />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select> <br />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" /> <br />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" /> <br />
        <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address"></textarea> <br />
        <input name="city" value={formData.city} onChange={handleChange} placeholder="City" /> <br />
        <input name="state" value={formData.state} onChange={handleChange} placeholder="State" /> <br />
        <input name="zip" value={formData.zip} onChange={handleChange} placeholder="Zip" /> <br />
        <input name="country" value={formData.country} onChange={handleChange} placeholder="Country" /> <br />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea> <br />
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data</h3>
          <p><b>Name:</b> {submittedData.name}</p>
          <p><b>Age:</b> {submittedData.age}</p>
          <p><b>Gender:</b> {submittedData.gender}</p>
          <p><b>Email:</b> {submittedData.email}</p>
          <p><b>Phone:</b> {submittedData.phone}</p>
          <p><b>Address:</b> {submittedData.address}</p>
          <p><b>City:</b> {submittedData.city}</p>
          <p><b>State:</b> {submittedData.state}</p>
          <p><b>Zip:</b> {submittedData.zip}</p>
          <p><b>Country:</b> {submittedData.country}</p>
          <p><b>Message:</b> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}
