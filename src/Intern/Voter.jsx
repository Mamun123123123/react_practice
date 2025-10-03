import { useState } from "react";
import React from 'react'

const Voter = () => {
    const [age,setAge] = useState("")
    const [check,setChecked] = useState(false)
    const [countA,setCountA] = useState(0)
    const [countB,setCountB] = useState(0)

    const handleVoteA = () => {
        setCountA(countA +1)
    }
    const handleVoteB = () => {
        setCountB(countB +1)
    }
    const handleCheck = () => {
        setAge(age>=18 ? setChecked(true): alert("You are not Eligible"))
    }
  return (
    <div>
        <input
         type="number" 
         value={age}
         placeholder="Enter your age"
         onChange={e=>setAge(e.target.value)}
         />
         <button onClick={handleCheck}>Check</button>
          {check && (
            <>
            <h1>Vote Now</h1>
            <div>
              <button onClick={handleVoteA}>Vote A</button>
             <p>{countA}</p>
             <button onClick={handleVoteB} >Vote B</button>
             <p>{countB}</p>
            </div>
             <div>
              <p>The Total Vote A : {countA} </p>
              <p>The Total Vote B : {countB} </p>
             </div>
            </>
          )}
    </div>
  )
}

export default Voter