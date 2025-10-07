import React from 'react'
const people = [
    {name:"Mamun",age:23},
    {name:"Masum",age:25},
    {name:"Rahim",age:34}
]
export default function Ob1() {
  return (
    <div>
    <h1>Display Objects</h1>
    {
        people.map((item,index)=>(
            <p key={index}>
                {item.name} - {item.age}
            </p>
        ))
    }
    </div>
  )
}

