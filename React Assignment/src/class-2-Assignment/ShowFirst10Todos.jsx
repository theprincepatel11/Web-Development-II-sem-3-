import { useEffect, useState } from "react";

function ShowFirst10Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const first10Todos = todos.slice(0, 10);

  return (
    <div>
      <h2>Q2. Show First 10 Todos</h2>

      {first10Todos.map((todo) => (
        <div key={todo.id}>
          <p>
            <b>ID:</b> {todo.id} | <b>Title:</b> {todo.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ShowFirst10Todos;