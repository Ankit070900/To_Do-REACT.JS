import { createContext, useReducer } from "react";

export const ContextItem = createContext();

const todoItemReduser = (curTodoItem, action) => {
  let newTodoItem = curTodoItem;
  if (action.type === "NEW_ITEM") {
    newTodoItem = [
      ...curTodoItem,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItem = curTodoItem.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItem;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItem, dispatchTodoItem] = useReducer(todoItemReduser, []);

  const addNewItems = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItem(newItemAction);
  };
  const deleteItem = (todoItmename) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItmename,
      },
    };
    dispatchTodoItem(deleteItemAction);
  };

  return (
    <ContextItem.Provider
      value={{
        todoItem: todoItem,
        addNewItems: addNewItems,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </ContextItem.Provider>
  );
};
export default TodoItemsContextProvider;
