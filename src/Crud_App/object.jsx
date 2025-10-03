import React from 'react'
import { useState } from 'react'
const Objects_handle = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    role: ""
  })
  const [submittedUser, setSubmittedUser] = useState(null);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    setSubmittedUser(user);
  };
  return (
    <div>
      <h2>Enter User Info</h2>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder='Enter your Name'
      />
      <input
        type="number"
        name="age"
        onChange={handleChange}
        placeholder='Enter your age'
      />
      <select name="role" onChange={handleChange}>
        <option value="">Select Role</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Frontend">Frontend</option>
      </select>
      <button onClick={handleSubmit}>Show Preview</button>

      {submittedUser && (
        <div>
          <h3>Preview:</h3>
          <p>
            Name: {submittedUser.name} <br />
            Age: {submittedUser.age} <br />
            Role: {submittedUser.role}
          </p>
        </div>
      )}
    </div>
  )
}

export default Objects_handle
