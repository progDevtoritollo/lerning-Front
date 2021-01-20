import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="todo_header">
        <div className="del">My ToDo APP</div>
      </header>
      <div className="input">
        <input type="text" size="40"></input>
      </div>
      <div className="todo_body">
        <div className="item">
          <input type="checkbox" checked="checked" />
          <label>Added task</label>
          <button>Del</button>
        </div>
      </div>
    </div>
  );
}

export default App;
