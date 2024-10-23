const TodoItem = ({ todoName, todoDate, onDeleteitem }) => {
  return (
    <div className="container">
      <div className="row rows">
        <div className="col-4 text">{todoName}</div>
        <div className="col-4 text">{todoDate}</div>
        <div className="col-2 text">
          <button
            className="btn button btn-danger"
            onClick={() => onDeleteitem(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
