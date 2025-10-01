import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement =()=>{
          count
         if(count !== 0){
               setCount (count - 1)
         }    
    }
    const handleReset = () =>{
        
        setCount(0)
    }
  return (
    <div className='  flex justify-center items-center'>
        <div className='bg-white p-6 rounded-lg shadow-md text-center'>
         <h1 >My Counter App</h1>
         <p>count: {count}</p>
         <div className='flex space-x-4'>
            <button onClick={handleIncrement} className='px-4 py-2 bg-green-500 '>Add</button>
            <button onClick={handleDecrement} className='px-4 py-2 bg-gray-700 '>remove</button>
            <button onClick={handleReset} className='px-4 py-2 bg-orange-800 '>reset</button>

         </div>
        </div>
      
    </div>
  )
}

export default Counter
