import React, { useState } from 'react'
const people = [
    {name:"Mamun",age:93},
    {name:"Masum",age:25},
    {name:"Rahim",age:34}
]
const Ob4 = () => {
    const [sorta,setsorta] = useState([...people])
    const sortAge = () =>{
    const sorted = [...sorta].sort((a,b)=>a.age-b.age)
    setsorta(sorted)
    }
    const Delete= (index) => {
         setsorta(people.filter((_,i)=>i!==index))
    }
    return (
    <div>
      <h1>Sort Object by age</h1>
      <button onClick={sortAge}>Sort</button>
      <ul>
        {
            sorta.map((item,index)=>{
                return (
                    <li key={index}>
                        {index+1}: {item.name} - {item.age}
                      <button onClick={() => Delete(index)}>Delete</button>
                         
                    </li>
                    
                )
                
            })
        }
      </ul>
    </div>
  )
}

export default Ob4