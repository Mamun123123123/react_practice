import React from 'react'
const people = [
    {name:"Mamun",age:23},
    {name:"Masum",age:25},
    {name:"Rahim",age:34}
]
export default function Ob2() {
  return (
    <div>
    <h1>Display Objects</h1>
        <ul>
            {
                people.map((item,index)=>(
                    <li key={index}>
                       {index+1}: {item.name} - {item.age}
                    </li>
                ))
            }
        </ul>

    </div>
  )
}

