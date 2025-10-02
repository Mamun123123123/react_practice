import { useState } from "react";

export default function MyForm() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(
      `Name: ${formData.name}\nEmail: ${formData.email}\nGender: ${formData.gender}\nAgreed: ${formData.agree}`
    );
  };

  return (
    <div className="p-4 bg-yellow-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">React Form Example</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
    
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="border p-1"
          />
        </div>

        
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border p-1"
          />
        </div>
        
        <div>
          <label>Gender: </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border p-1"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>


        <div>
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            I agree to terms
          </label>
        </div>

        <button
          type="submit"
          className="bg-yellow-800 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
      <div className="mt-6">
        <h2 className="font-bold">Preview:</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Gender: {formData.gender}</p>
        <p>Agreed: {formData.agree ? "Yes ✅" : "No ❌"}</p>
      </div>
    </div>
  );
}
