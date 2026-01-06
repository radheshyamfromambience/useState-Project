import { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-page">
      <div className="counter-card">

        <h1>Counter App</h1>
        <p className="subtitle">
          React useState Practice Project
        </p>

        <div className="count-box">
          {count}
        </div>

        <div className="btn-group">
          <button onClick={() => setCount(count - 1)} className="btn minus">
            −
          </button>

          <button onClick={() => setCount(0)} className="btn reset">
            Reset
          </button>

          <button onClick={() => setCount(count + 1)} className="btn plus">
            +
          </button>
        </div>

      </div>
    </div>
  );
}

export default Counter;
