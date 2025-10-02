import React from 'react'
import { useState } from 'react'
const Exercise3 = () => {
    const [email,setEmail] = useState("")
    const handle = (e)=>{
      e.preventDefault()
      alert("Submitted : " + email)
    }
  return (
    <form onSubmit={handle}>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <button type='submit'>Submit</button>
    </form>
  )
}
export default Exercise3
