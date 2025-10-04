import React, { useRef } from 'react'

const Input = () => {
    const inputRef = useRef(null)
    const setInput = () => {
        inputRef.current.focus()
    }
  return (
    <div>
        <input 
        ref={inputRef}
        type="text"
        placeholder='Enter your name'
        />
        <button onClick={setInput}>Submit</button>
    </div>
  )
}

export default Input