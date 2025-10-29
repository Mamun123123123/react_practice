import React,{useState} from 'react'
import Bio from './Bio'
const Toggole = () => {
    const [show ,setShow] = useState(false)
  return (
    <div>
        <h1>My Details:</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia, tempore aliquid nemo voluptatem error minus impedit quisquam voluptates?

        </p>
        <button onClick={()=>setShow(!show)}>{show ? "Hide" : "Show"} Details</button>
        {show && <Bio />}
    </div>
  )
}

export default Toggole