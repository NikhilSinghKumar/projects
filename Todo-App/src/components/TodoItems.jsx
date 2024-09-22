/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

function TodoItems({ todoList, delteItem }) {
  return (
    <>
      <div className="row">
        {todoList.map((items) => (
          <TodoItem
            key={items}
            todoName={items.name}
            todoDate={items.date}
            onDeleteButtonClick={delteItem}
          />
        ))}
      </div>
    </>
  );
}

export default TodoItems;
