function TodoItem() {
  let todoName = "Buy Milk";
  let todoDate = "20/09/2024";

  return (
    <>
      <div className="col-4">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-4">
        <button className="btn btn-danger">Delete</button>
      </div>
    </>
  );
}

export default TodoItem;
