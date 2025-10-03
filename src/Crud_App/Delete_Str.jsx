import { useState } from "react";
import React from 'react'

const Delete_Str = () => {
    const [name,setName] = useState(["mamun","Masum","Hi"])
    const [input,setInput] = useState("")
    const handleAdd = () => {
      
        setName([...name ,input])
        setInput("")
    } 
    const handleDelete = (index) => {
        setName(name.filter((_,i)=>i !== index))
    }
  return (
    <div>
     <h2>List of Student</h2>
     <input 
     type="text"
     name="name"
     value={input}
     onChange={e=>setInput(e.target.value)}
     placeholder="Enter your Name"
     />
     <button onClick={handleAdd}>Add</button>
     <ul>
        {
            name.map((item,index)=>{
                return(
                    <>
                    <li key={index}>
                        {item}{" "} 
                         <button onClick={()=>{handleDelete(index)}}>Delete</button>
                    </li>
                    </>
                )
            })
        }
     </ul>
    </div>
  )
}

export default Delete_Str