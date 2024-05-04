import TodoItem from "./TodoItem";
import React from "react";

function TodoList({ todoList, setTodoList }) {
  return (
    <ul className="todo-list">
      {todoList.map((todoItem) => {
        return (
          <TodoItem
            key={todoItem.id}
            todoThis={todoItem}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        );
      })}
    </ul>
  );
}

export default React.memo(TodoList);
