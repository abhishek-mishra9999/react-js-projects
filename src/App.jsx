import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  // let initialTodoItems = [
  //   { name: "Buy milk", dueDate: "04/05/2024" },
  //   {
  //     name: "Go to college",
  //     dueDate: "04/05/2024",
  //   },
  //   {
  //     name: "Learn React",
  //     dueDate: "04/05/2024",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New item added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    // console.log(`Item Deleted: ${todoItemName}`);
    const afterDelete = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(afterDelete);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClicked={handleDeleteItem} />
    </center>
  );
}

export default App;
