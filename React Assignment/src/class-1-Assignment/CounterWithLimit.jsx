import { useState } from "react";

function CounterWithLimit() {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Counter with Limit</h2>

      <h3>Count: {count}</h3>

      <button onClick={decrease} disabled={count === 0}>
        Decrease
      </button>

      <button onClick={increase} disabled={count === 10}>
        Increase
      </button>
    </div>
  );
}

export default CounterWithLimit;