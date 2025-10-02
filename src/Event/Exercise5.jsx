import { useState } from "react";
import React from 'react'

const Exercise5 = () => {
    const [city,setCity] = useState("")
  return (
    <div>
      <select value={city} onChange={e=>setCity(e.target.value)}>
        <option value="">Select City</option>
        <option value="Dhaka">Dhaka</option>
        <option value="Chittagong">Chittagong</option>
      </select>

      <p>{city}</p>
    </div>
  )
}

export default Exercise5
