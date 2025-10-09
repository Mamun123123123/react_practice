import React, { useMemo, useState } from 'react'

const Counter100 = () => {
  const [add,setAdd] = useState(0)
  const [sub,setsub] = useState(100)
  const multiplication = useMemo(function multiply(){
    console.log("Hello")
    return add*10
  },[add])
  return (
    <div>
      <h1>UseMemo</h1>
      {multiplication}<br/>
      <button onClick={()=> setAdd(add + 1)}>Add</button>
      {add}<br/>
      <button onClick={()=>setsub(sub-1)}>Sub</button>
      {sub}
    </div>
  )
}

export default Counter100