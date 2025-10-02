import { useState } from "react";
import React from 'react'

const Exercise1 = () => {
    const [count,setCount] = useState(0)
    const handleAdd = () => {
          setCount(count + 1)
    }
    const handleremove = () => {
        setCount(count-1)
    }
    const handlereset = () => {
        setCount(0)
    }
    return (
        <div>
            <h1>Count Your App</h1>
            <p>{count}</p>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handlereset}>Reset</button>
            <button onClick={handleremove}>Delete</button>
        </div>
    )
}

export default Exercise1