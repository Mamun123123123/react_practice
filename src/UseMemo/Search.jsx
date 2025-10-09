import React, { useMemo, useState } from 'react'

const Search = () => {
    const [users] =useState(
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
         <ul>
        {filteredname.map((u, i) => (
          <li key={i}>{u.name} - {u.age}</li>
        ))}
      </ul>
    </div>
  )
}

export default Search