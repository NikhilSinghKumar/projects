import { useState } from "react";
import "./App.css";
import TodoAdd from "./components/TodoAdd";
import TodoItems from "./components/TodoItems";

function App() {
  let [todoList, SetTodoList] = useState([]);

  function handleNewItem(itemName, itemDate) {
    let newTodoItem = [...todoList, { name: itemName, date: itemDate }];
    SetTodoList(newTodoItem);
  }

  function handleDeleteItem(todoListItemName) {
    let newTodoListItemName = todoList.filter(
      (item) => item.name !== todoListItemName
    );
    SetTodoList(newTodoListItemName);
  }

  return (
    <center>
      <h1>Todo App</h1>
      <div className="container">
        <TodoAdd addTodoItem={handleNewItem} />
        <TodoItems todoList={todoList} delteItem={handleDeleteItem} />
      </div>
    </center>
  );
}

export default App;
