import { useState } from "react";
import "./theme.css";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "theme-page dark" : "theme-page light"}>
      
      <div className="theme-card">

        <div className="theme-header">
          <h1>Theme Mode</h1>
          <button
            className="toggle-btn"
            onClick={() => setDark(!dark)}
          >
            {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <p className="subtitle">
          React useState Theme Switcher
        </p>

        <div className="content-box">
          <p>
            This project demonstrates how to switch
            between light and dark themes using
            React useState.
          </p>
        </div>

      </div>
    </div>
  );
}

export default ThemeToggle;
