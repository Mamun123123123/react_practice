import React, { useEffect, useState } from 'react'
import { useEffectEvent } from 'react'

const Timer = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        const counter = setInterval(() => {
            setCount(count => count + 1)
        }, 1000);
        return ()=> clearInterval(counter)
    },[])
  return (
    <div>
        <h1>Timer:{count}</h1>
    </div>
  )
}

export default Timer