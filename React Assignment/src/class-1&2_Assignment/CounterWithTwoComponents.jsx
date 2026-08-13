import { useState } from "react";

function Display({ count }) {
  return <h3>Count: {count}</h3>;
}

function Controls({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount((count) => count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount((count) => count + 1)}>
        Increase
      </button>
    </div>
  );
}

function CounterWithTwoComponents() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter Split into Two Components</h2>

      <Display count={count} />

      <Controls setCount={setCount} />
    </div>
  );
}

export default CounterWithTwoComponents;