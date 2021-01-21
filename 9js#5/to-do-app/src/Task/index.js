import "../App.css";

function Task(prop) {
  return (
    <div>
      <div>{prop.task}</div>
      {/* <input type="checkbox" checked="checked" /> */}
      <label>Added task</label>
      <button>Del</button>
    </div>
  );
}

export { Task };
