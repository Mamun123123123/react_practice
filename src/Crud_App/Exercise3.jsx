import { useState } from "react";
import React from 'react'

const Exercise3 = () => {
    const [msg, setMsg] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(msg)
        setMsg("")
    }
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={msg}
                    onChange={(e) => { setMsg(e.target.value) }}
                />
                <button type="submit">Submit</button>


            </form>

            

        </div>
    )
}

export default Exercise3