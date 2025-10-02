import { useState } from "react";
import React from 'react'

const Exercise2 = () => {
    const [name,setName] = useState("")
    const handleName = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
           <label htmlFor="name">Enter your name</label>
           <input
            type="text"  
            value={name}
            onChange={handleName}
            placeholder="Enter your name"
            />
            <p>{name}</p>
        </div>
    )
}

export default Exercise2