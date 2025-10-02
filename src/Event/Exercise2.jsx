import React from 'react'
import { useState } from 'react'

const Exercise2 = () => {
    const [name,showName] = useState("")
  return (
    <div>
      <label htmlFor="text">Enter Your Name</label> 
      <input 
      type="text"
      placeholder='Enter your name....'
      onChange={(e)=>showName(e.target.value)}
      />
      <p>You typed : {name}</p>
    </div>
  )
}

export default Exercise2
