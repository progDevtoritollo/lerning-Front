import "../App.css";

function Task({ task }) {
  return (
    <div>
      <div>{task}</div>
      {/* <input type="checkbox" checked="checked" /> */}
      <label>Added task</label>
      <button>Del</button>
    </div>
  );
}

export { Task };
