import React, { useState } from 'react'
const people = [
    {name:"Mamun",age:23},
    {name:"Masum",age:25},
    {name:"Rahim",age:34}
]
const Ob3 = () => {
    const [search,setSearch] = useState("")
    const filtered = people.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
     <h2>Search Object</h2>
     <input className='border rounded-3xl p-1 text-center' type="text" 
     placeholder='Search here..'
     value={search}
     onChange={e=>setSearch(e.target.value)} 
     />
     <ul>
        {
            filtered.map((item,index)=>(
                <li key={index}>
                  {index+1}: {item.name} - {item.age}
                </li>
            ))
        }
     </ul>
    </div>

  )
}

export default Ob3