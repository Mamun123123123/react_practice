import { useState } from "react";
import React from 'react'

const Object_list = () => {
    const [Data, setData] = useState({
        name: "",
        age: "",
        role: ""
    });

    const [show, setShow] = useState([]);

    const handleData = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value });
    };

    const handleShowData = () => {
        if (Data.name && Data.age && Data.role) {
            setShow([...show, Data]); 
            setData({ name: "", age: "", role: "" }); 
        } else {
            alert("Please fill all fields!");
        }
    };

    return (
        <div>
            <input 
                type="text" 
                name="name"
                value={Data.name}
                onChange={handleData}
                placeholder="Enter your Name"
            />
            <input
                type="number"
                name="age"
                value={Data.age}
                onChange={handleData}
                placeholder="Enter your Age"
            />
            <select 
                name="role"
                value={Data.role}
                onChange={handleData}
            >
                <option value="">Select Role</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
            </select>

            <button onClick={handleShowData}>Show All Data</button>

            <h3>All Data Here</h3>
            <ul>
                {show.map((item, index) => (
                    <li key={index}>
                        {index + 1}. {item.name} - Age: {item.age} - Skill: {item.role}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Object_list;
