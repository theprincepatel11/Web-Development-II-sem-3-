import { useEffect, useState } from "react";

function FilterTodosByUserId() {
  const [todos, setTodos] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const filteredTodos =
    selectedUser === null
      ? []
      : todos.filter((todo) => todo.userId === selectedUser);

  return (
    <div>
      <h2>Q3. Filter Todos by User ID</h2>

      <button onClick={() => setSelectedUser(1)}>
        User 1
      </button>

      <button onClick={() => setSelectedUser(2)}>
        User 2
      </button>

      <button onClick={() => setSelectedUser(3)}>
        User 3
      </button>

      {selectedUser !== null && (
        <h3>Todos for User {selectedUser}</h3>
      )}

      {filteredTodos.map((todo) => (
        <div key={todo.id}>
          <p>
            <b>ID:</b> {todo.id} | <b>Title:</b> {todo.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FilterTodosByUserId;