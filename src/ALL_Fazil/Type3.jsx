import React, { useState } from 'react'

export const Type3 = () => {
    const num = [2,3,4,1,5,6,7,8,9,10]
    const [numbers] = useState(num)
  return (
    <div>
     <h1>Sum</h1>
     {
        numbers.reduce((item,sum) =>(
            item+sum
        ))
     }
    </div>
  )
}
