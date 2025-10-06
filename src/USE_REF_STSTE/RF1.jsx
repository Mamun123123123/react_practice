import React from 'react'
import { useRef } from 'react'

const RF1 = () => {
    const inputRef = useRef()
  return (
    <div> 
       <input ref={inputRef} placeholder='Type Here...' />
        <button onClick={() => alert(inputRef.current.value)}>Show</button>
      
    </div>
  )
}

export default RF1