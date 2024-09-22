import "./App.css";
import TodoAdd from "./components/TodoAdd";
import TodoItems from "./components/TodoItems";

function App() {
  return (
    <center>
      <h1>Todo App</h1>
      <div className="container">
        <TodoAdd />
      </div>
      <div className="container">
        <TodoItems />
      </div>
    </center>
  );
}

export default App;
