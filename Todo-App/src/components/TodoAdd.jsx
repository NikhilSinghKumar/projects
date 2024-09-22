function TodoAdd() {
  return (
    <div className="row">
      <div className="col-4">
        <input type="text" placeholder="Enter Todo" />
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-4">
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
  );
}

export default TodoAdd;
