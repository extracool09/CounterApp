import React, { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="main-container">
      <div className="container">
        <h1 className="header">COUNTER APP</h1>

        <div className="card">
          <h2 className="counter">{count}</h2>
          <button className="btn-primary" onClick={() => setCount(count + 1)}>
            INCREMENT
          </button>
          <button
            className="btn-secondary"
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            DECREMENT
          </button>
          <button className="btn-neutral" onClick={() => setCount(0)}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;