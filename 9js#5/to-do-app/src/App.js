import React, { useState } from "react";

import "./App.css";
import { Task } from "./Task";

function App() {
  const [task, setTask] = useState("");

  const handleOnChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="App">
      <header className="todo_header">
        <p> My ToDo App</p>
        <label className="input">
          Input task
          <input
            onChange={handleOnChange}
            placeholder="input me"
            type="text"
            size="50"
          ></input>
          <button>Add</button>
        </label>
      </header>
      <div className="todo_body">
        <Task task={task} />
      </div>
    </div>
  );
}

export default App;
