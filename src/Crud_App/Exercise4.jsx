
import React from 'react'

const Exercise4 = () => {
    
    const str = ["mamun","masum","Abdullah","Al mamun"]

  return (
    <div>
      <ul>
        {
            str.map((item,index)=> {
               return <li key={index}>
                    {index+1}.{item}
                </li>
            })
        }
      </ul>
    </div>
  )
}

export default Exercise4
