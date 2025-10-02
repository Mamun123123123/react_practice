import { useState } from "react";
import React from 'react'

const Exercise4 = () => {
    const [agree,setAgree] = useState(false)
  return (
    <div>
      <input type="checkbox" onChange={()=> setAgree(!agree)} />
      <p>{agree ? "Agreed" : "Not Agreed" } </p>
    </div>
  )
}

export default Exercise4
