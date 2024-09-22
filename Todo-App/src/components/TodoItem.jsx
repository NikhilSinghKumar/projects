/* eslint-disable react/prop-types */
function TodoItem({ todoName, todoDate, onDeleteButtonClick }) {
  return (
    <>
      <div className="col-4">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-4">
        <button
          className="btn btn-danger"
          onClick={() => onDeleteButtonClick(todoName)}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default TodoItem;
