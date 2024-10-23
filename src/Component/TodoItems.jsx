import { useContext } from "react";
import TodoItem from "../Component/TodoItem";
import { ContextItem } from "../Store/item-context-store";

const TodoItems = () => {
  const { todoItem, deleteItem } = useContext(ContextItem);

  return (
    <div className="itemContainer">
      {todoItem.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteitem={deleteItem}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
