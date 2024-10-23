import { useContext, useRef, useState } from "react";
import { ContextItem } from "../Store/item-context-store";

const AddTodo = () => {
  const { addNewItems } = useContext(ContextItem);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButton = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItems(todoName, dueDate);
  };

  return (
    <div className="container text-center input">
      <div className="row rows">
        <div className="col-4">
          <input
            ref={todoNameElement}
            type="datetime"
            name=""
            id=""
            placeholder="Enter todo here"
            required
          />
        </div>
        <div className="col-4">
          <input ref={dueDateElement} required type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button onClick={handleAddButton} className="btn button btn-success">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddTodo;
