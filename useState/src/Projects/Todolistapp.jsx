import { useState } from "react";
import "./todo.css";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-page">
      <div className="todo-card">

        <h1>Todo List</h1>
        <p className="subtitle">
          React useState CRUD Practice
        </p>

        {/* INPUT */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTodo}>Add</button>
        </div>

        {/* TODO LIST */}
        <ul className="todo-list">
          {todos.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <button onClick={() => deleteTodo(index)}>✕</button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default Todo;
