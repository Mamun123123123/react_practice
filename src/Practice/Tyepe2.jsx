import React, { useState } from 'react'

export const Tyepe2 = () => {
    const [numbers] = useState([2,3,4,5,6])
  return (
    <div>
        <h2>Filered : </h2>
        {
            numbers.filter(item => (
                item % 2 == 0
            ))
        }
    </div>
  )
}
