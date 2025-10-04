import React,{useRef} from "react";
export default function Example1(){
    const myRef = useRef("Hello World")
    return <h2>{myRef.current}</h2>
}