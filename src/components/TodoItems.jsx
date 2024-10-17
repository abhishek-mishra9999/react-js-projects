import TodoItem from "./TodoItem";

function TodoItems({ todoItems , onDeleteClicked}) {
  return (
    <div className="text-container">
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate} onDelete={onDeleteClicked} ></TodoItem>
      ))}
    </div>
  );
}

export default TodoItems;
