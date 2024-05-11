import TodoItem from "./TodoItem";
import React from "react";

function TodoList({ todoList, setTodoList }) {
  return (
    <div className="todo-list-box">
      <ul className="todo-list">
        {todoList.map((todoItem) => {
          return (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default React.memo(TodoList);
