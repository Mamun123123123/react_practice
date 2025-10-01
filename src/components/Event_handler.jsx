import React from 'react'
import { useState } from 'react'

const Event_handler = () => {
    const [count,setCount] = useState(0)
    const Event = () => {
    // alert("Hello")
    setCount(count + 1)
}
  return (
    <div >
        <p>You click {count} times</p>
      <button onClick={Event} className='bg-indigo-500 px-8 py-2 hover:bg-blue-900'>Click Me</button>
    </div>
  )
}

export default Event_handler
