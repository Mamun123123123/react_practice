import React, { useEffect, useState } from 'react'

const Another = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        setTimeout(() => {
            setCount(prev => prev + 1)
        }, 2000);
    })
  return (
    <div>
        <h1>I've rendered {count} times! </h1>
    </div>
  )
}

export default Another