import CounterWithLimit from "./class-1&2_Assignment/CounterWithLimit";
import ReusableStudentCard from "./class-1&2_Assignment/ReusableStudentCard";
import CounterWithTwoComponents from "./class-1&2_Assignment/CounterWithTwoComponents";
import TodoCountBadge from "./class-1&2_Assignment/TodoCountBadge";
import LikeButton from "./class-1&2_Assignment/LikeButton";

function App() {
  return (
    <div>
      <h1>React State & Props - Coding Practice</h1>

      <hr />
      <CounterWithLimit />

      <hr />
      <ReusableStudentCard />

      <hr />
      <CounterWithTwoComponents />

      <hr />
      <TodoCountBadge />

      <hr />
      <LikeButton />
    </div>
  );
}

export default App;