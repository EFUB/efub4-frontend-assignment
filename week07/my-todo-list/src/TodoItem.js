import React from "react";

function TodoItem({ todoItem, todoList, setTodoList }) {
  function deleteTodo() {
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
  }

  function completeTodo() {
    setTodoList(
      todoList.map((item) => {
        return item.id === todoItem.id
          ? { ...item, done: !todoItem.done }
          : item;
      })
    );
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todoItem.done}
        onChange={completeTodo} // Use onChange instead of onClick
        className="check-box"
      />
      <span className="item-text">{todoItem.text}</span>
      <input
        type="button"
        value="x"
        onClick={deleteTodo}
        className="delete-button"
      />
    </li>
  );
}

export default React.memo(TodoItem);
