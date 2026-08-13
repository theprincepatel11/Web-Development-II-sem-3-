import { useState } from "react";

function Badge({ count }) {
  return <h3>Total Tasks: {count}</h3>;
}

function TodoCountBadge() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  return (
    <div>
      <h2>Todo Count Badge</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <Badge count={tasks.length} />

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoCountBadge;