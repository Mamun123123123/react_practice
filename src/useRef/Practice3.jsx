import React,{useRef} from "react";
export default function Example3(){
    const inputRef = useRef()
    const handleClick = () => {
        alert("input value: " + inputRef.current.value)
    }
    return (
        <div>
            <input ref={inputRef} />
            <button onClick={handleClick}>Show Value</button>
        </div>
    )
}
