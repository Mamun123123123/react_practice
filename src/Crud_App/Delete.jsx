import { useState } from "react";
import React from 'react'

const Delete = () => {
    const [numbers,setNumbers] = useState([10,20,30,40,50])
    const handleDelete = (index) => {
        setNumbers(numbers.filter((_,i)=>i !== index))
    }
  return (
    <div>
        <h1>Numbers</h1>
        <ul>
            {
                numbers.map((item,index)=>{
                    return (
                        <>
                         
                        <li key={index}>{item}</li> 
                        <button onClick={()=>handleDelete(index)}>Delete</button>
                        </>
                       

                    )
                    
                    
                })
            }
        </ul>
    </div>
  )
}

export default Delete