import { useContext } from "react";
import "../App.css";
import { ContextItem } from "../Store/item-context-store";

const WelcomeMessage = () => {
  const { todoItem } = useContext(ContextItem);
  return todoItem.length === 0 && <p className="welcome">Enjoy Your Day</p>;
};
export default WelcomeMessage;
