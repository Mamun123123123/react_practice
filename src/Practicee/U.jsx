import React,{useState,useEffect} from 'react'

const U = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        document.title = `${count} new messages!`
    },[])
  return (
    <div>
         <h1>{count} new Message!!</h1>
         <button onClick={()=>setCount(count + 1)}>add</button>
    </div>
  )
}

export default U