import React from 'react'
import { useState } from 'react'

export const Type1 = () => {
    const [numbers] = useState([1,2,3,4,5])
  return (
    <div>
          <h2>Numbers Doubled : </h2>
          {
            numbers.map(num => (
                <p key={num}>{num*2}</p>
            ))
          }
    </div>
  )
}
