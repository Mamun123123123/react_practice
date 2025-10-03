import { useState } from "react";
import React from 'react'

const Basic_controlled = () => {
    const [FormData,setFormData] = useState({
        name:"",age:"",email:"",city:""
    })
    const handle = (e) => {
        const {name,value} = e.target
        setFormData({...FormData,[name]:value})
    }
    const [showData,setShowData] = useState([])
    const handleAll = () => {
        setShowData([...showData,FormData])
        setFormData({name:"",age:"",email:"",city:""})
    
    }
  return (
    <div>
        <input
         type="text"
         name="name"
         value={FormData.name}
         onChange={handle}
         placeholder="Enter your Name"
         />
         <input
          type="number"
          name="age"
          value={FormData.age}
          onChange={handle}
          placeholder="Enter your age"
         />
         <input 
         type="email"
         name="email"
         value={FormData.email}
         onChange={handle}
         placeholder="Enter your Email"
         />
         <select
          name="city"
          value={FormData.city}
          onChange={handle}
         >
         <option value="">Select City</option>
         <option value="Dhaka">Dhaka</option>
         <option value="Chittagong">Chittagong</option>
         <option value="Khulna">Khulna</option>
         </select>
         <button onClick={handleAll}>Submit</button>

         <p>
            <ul>
                {
                    showData.map((item,index)=>{
                      return  <li key={index}>
                            {index+1}:  {item.name} - {item.age} - {item.email} - {item.city}
                        </li>
                    })
                }
            </ul>
         </p>
    </div>
  )
}

export default Basic_controlled