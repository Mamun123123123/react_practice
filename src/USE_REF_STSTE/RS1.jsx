import React, { useState } from 'react'

const RS1 = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
    <button onClick={()=> setCount(count+1)}>Add</button>
    <button onClick={()=>count > 0 ? setCount(count-1) : "0"}>sub</button>
    <p>count : {count}</p>
    </div>
  )
}

export default RS1