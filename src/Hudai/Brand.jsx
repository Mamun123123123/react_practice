import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Brand = () => {
    const [car,setCar] = useState({
        brand:"Ferrari",
        model:"Roma",
        year: "2023",
        color:"White"
    })
    const handleChange = () => {
        setCar((prev)=>{
            return {...prev,color:"Red",year:"2025",brand:"Ferrari 2.0"}
        })
    }
   
  return (
    <div>
       <h1>My Car {car.brand}</h1>
       <h2>It is a {car.color} {car.model} from {car.year}</h2>
       <button onClick={handleChange}>Change</button>
    </div>
  )
}

export default Brand