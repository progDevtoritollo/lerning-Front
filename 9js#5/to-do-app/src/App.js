import React, { useState } from "react";

import "./App.css";
// import { Task } from "./Task/Task.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleOnChangeInput = ({ target }) => {
    setTodoText(target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, { text: todoText, done: false }]);
    setTodoText("");
  };

  const handleTodoDone = (i) => {
    const todoWhitoutDuplicate = todos.filter((val, index) => index !== i); //разобраться
    // а что собственно фильтруем?

    setTodos([
      ...todoWhitoutDuplicate,
      { text: todos[i].text, done: !todos[i].done },
    ]);
  };
  return (
    <div className="App">
      <header className="todo_header">
        <p> My ToDo App</p>
        <label className="input">
          Input task
          <input
            onChange={handleOnChangeInput}
            placeholder="input me"
            type="text"
            size="50"
          ></input>
          <button onClick={handleAddTodo}>Add</button>
        </label>
      </header>
      <div className="todo-block">
        {todos.map((todo, index) => {
          return (
            <div className="todo">
              <button
                onClick={() => {
                  handleTodoDone(index);
                }}
              >
                Done
              </button>
              <span className={todo.done ? "todo_text-done" : ""}>
                {todo.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
