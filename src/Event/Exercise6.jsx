import { useState } from "react";

export default function CrudApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    if (editId !== null) {
      
      setTasks(tasks.map(t => (t.id === editId ? { ...t, text: task } : t)));
      setEditId(null);
    } else {
      
      setTasks([...tasks, { id: Date.now(), text: task }]);
    }

    setTask("");
  };

 
  const handleEdit = (id) => {
    const t = tasks.find(t => t.id === id);
    setTask(t.text);
    setEditId(id);
  };


  const handleDelete = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="p-4 bg-yellow-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Basic CRUD Todo App</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          className="border p-1 mr-2"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-1 rounded">
          {editId !== null ? "Update" : "Add"}
        </button>
      </form>

      <ul>
        {tasks.length === 0 && <p>No tasks added</p>}
        {tasks.map(t => (
          <li key={t.id} className="mb-2">
            {t.text}
            <button
              onClick={() => handleEdit(t.id)}
              className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(t.id)}
              className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
