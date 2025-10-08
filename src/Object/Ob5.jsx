import React from 'react'
import { useState } from 'react';
const Ob5 = () => {
  const [users, setUsers] = useState([
    { name: "Mamun", age: 23 },
    { name: "Masum", age: 29 },
    { name: "Rahim", age: 25 },
  ]);
  const sortbyage = () => {
    const sorted = [...users].sort((a,b)=>a.age-b.age)
    setUsers(sorted)
  }
  return (
    <div>
        <button onClick={sortbyage}>Sort</button>
        <ul>
          {
            users.map((item,index)=>{
              return (
                <li key={index}>
                  {item.name} - {item.age}
                </li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default Ob5