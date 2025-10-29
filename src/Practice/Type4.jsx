import React, { useState } from 'react'

export const Type4 = () => {
  const [numbers ,setNumbers] = useState([1,2,3])
  const addnumber = () => {
    const newArr = [...numbers]
    newArr.push(4);
    setNumbers(newArr)
  }
  return (
    <div>
      <h2>Push Example : </h2>
      <button onClick={addnumber}>Add</button>
      <p>{numbers.join(",")}</p>
    </div>
  )
}
