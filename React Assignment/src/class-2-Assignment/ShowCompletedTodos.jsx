import { useEffect, useState } from "react";

function ShowCompletedTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const completedTodos = todos.filter((todo) => todo.completed === true);

  return (
    <div>
      <h2>Q1. Show Completed Todos Only</h2>

      {completedTodos.map((todo) => (
        <div key={todo.id}>
          <p>
            <b>ID:</b> {todo.id} | <b>Title:</b> {todo.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ShowCompletedTodos;