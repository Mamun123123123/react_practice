import React, { useMemo, useState } from 'react'

const Search = () => {
    const [users,setusers] =useState(
        [
            {name:"mamun",age:444},
            {name:"masum",age:500},
            {
                name:"Karim",age:987
            },
             {
                name:"Karim",age:800
            }
        ]
    )
    const D = (index) =>{
        const updated = [...users]
         updated.splice(index,1)
         setusers(updated)
    }
    const [search,setsearch] = useState('')
    const filteredname = useMemo(function findbyname(){
              return users.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).sort((a,b)=>a.age-b.age)
    },[search,users])
    
  return (
    <div>
        <h2>Users list Search</h2>
        <input 
        value={search}
        placeholder='Enter here...'
        onChange={(e)=>setsearch(e.target.value)}
         />
        <table>
            <th>Name</th>
            <th>Age</th>
            <th>Event</th>
            {filteredname.map((u, i) => (
            <tr key={i}>
              <td>{u.name}</td>
              <td>{u.age}</td>
              <td><button onClick={()=> D(i)}>Delete</button></td>
            </tr>
          ))}
        </table> 
    </div>
  )
}

export default Search