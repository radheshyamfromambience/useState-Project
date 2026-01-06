import { useState } from "react";
import "./password.css";

function PasswordToggle() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="password-page">
      <div className="password-card">

        <h1>Password Toggle</h1>
        <p className="subtitle">
          React useState Boolean Practice
        </p>

        <div className="input-group">
          <input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            className="toggle-btn"
            onClick={() => setShow(!show)}
          >
            {show ? "Hide" : "Show"}
          </span>
        </div>

      </div>
    </div>
  );
}

export default PasswordToggle;
