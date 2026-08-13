import { useEffect, useState } from "react";

function SearchAndDeleteTodos() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Q5. Search + Delete Together</h2>

      <input
        type="text"
        placeholder="Search todo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredTodos.map((todo) => (
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

export default SearchAndDeleteTodos;