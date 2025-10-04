import React,{useRef} from "react";
export default function Example2(){
    const inputRef = useRef(null)
    return (
        <div>
            <input
            ref={inputRef}
            type="text" 
            placeholder="Type Here..."
            />
            <button onClick={()=>inputRef.current.focus()}>Submit</button>
        </div>
    )
}