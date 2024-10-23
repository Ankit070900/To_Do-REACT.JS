import AddTodo from "./Component/AddTodo";
import TodoName from "./Component/TodoName";
import TodoItems from "./Component/TodoItems";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeMessage from "./Component/WelcomeMessage";
import TodoItemsContextProvider from "./Store/item-context-store";

function App() {
  // const [todoItem, setTodoItem] = useState([]);

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <TodoName></TodoName>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
