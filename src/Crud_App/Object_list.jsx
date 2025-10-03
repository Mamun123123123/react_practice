import { useState } from "react";
import React from 'react'

const Object_list = () => {
    const [Data,setData] = useState({
        name:"",
        age:"",
        role:""
    })
    const handleData = (e) => {
        setData({...Data,[e.target.name]:e.target.value})
    }
    const [show,setShow]=useState([])
   const handleShowData = (e) => {
     setShow([...show,Data])
   }

  return (
    <div>
        <input type="text" 
        name="name"
        onChange={handleData}
        placeholder="Enter your Name"
        />
        <input
         type="number"
          name="age"
          onChange={handleData}
          placeholder="Enter your Age"
         />
         <select 
         name="role"
         onChange={handleData}
         >
         <option value="">Select Role</option>
         <option value="Software Engineer">SoftWare Engineer</option>
         <option value="Frontend Developer">Frontend Developer</option>
         <option value="Backend Developer">Backend Developer</option>
           </select>
           <button onClick={handleShowData}>Show All Data</button>

           <h3>All Data Here</h3>
           <ul>
            {
                show.map((item,index)=>{
                    return(
                        <li key={index}>
                            {index+1}.{item.name} - {item.age} - {item.role}
                        </li>
                    )
                })
            }
           </ul>
    </div>
  )
}

export default Object_list