import { useState } from "react"

export default function To_do(){
    const [task,setTask] = useState("")
    const [allTasks,setAllTasks] = useState([])

    const addTask = () => {
        if(task.trim() === "") return;
        setAllTasks([...allTasks, {id: Date.now(), text: task}])
        setTask("")
    }

    return (
        <div className="text-center bg-amber-100 min-h-screen">
            <h1 className="p-4 font-bold">Todo List</h1>

            <input 
                type="text" 
                value={task}
                onChange={(event)=> setTask(event.target.value)}
                placeholder="Enter your text here...."
                className="border-slate-400 border-2 p-2 m-2"
            />

            <button 
                onClick={addTask} 
                className="bg-amber-900 text-white p-2 rounded-3xl shadow-lg"
            >
                Add Task
            </button>

            <div>
                {allTasks.length > 0 ? (
                    <ul className="mt-4">
                        {allTasks.map((task, index) => (
                            <li key={task.id}>
                                {index + 1}. {task.text}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="mt-4">No task</p>
                )}
            </div>
        </div>
    )
}
