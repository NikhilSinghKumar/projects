/* eslint-disable react/prop-types */
import { useState } from "react";

function TodoAdd({ addTodoItem }) {
  let [todoInput, setTodoInput] = useState("");
  let [todoDueDate, setTodoDueDate] = useState("");

  function handleInput(event) {
    setTodoInput(event.target.value);
  }

  function handleDate(event) {
    setTodoDueDate(event.target.value);
  }

  function handleAddButtonClick() {
    addTodoItem(todoInput, todoDueDate);
    setTodoInput("");
    setTodoDueDate("");
  }

  return (
    <div className="row">
      <div className="col-4">
        <input
          type="text"
          placeholder="Write todo.."
          value={todoInput}
          onChange={handleInput}
        />
      </div>
      <div className="col-4">
        <input type="date" value={todoDueDate} onChange={handleDate} />
      </div>
      <div className="col-4">
        <button className="btn btn-primary" onClick={handleAddButtonClick}>
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoAdd;
