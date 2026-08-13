import { useEffect, useState } from "react";

function DeleteTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Q4. Delete a Todo</h2>

      {todos.map((todo) => (
        <div key={todo.id}>
          <span>
            <b>{todo.id}.</b> {todo.title}
          </span>

          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default DeleteTodo;