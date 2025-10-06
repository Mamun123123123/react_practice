import React, { useState } from 'react'

const RS2 = () => {
    const [text,setText] = useState("")
  return (
    <div>
       <input onChange={e => setText(e.target.value)} />
       <p>you typed : {text} </p>
    </div>
  )
}

export default RS2