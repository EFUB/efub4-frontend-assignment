import React, { useCallback } from "react";
function TodoItem({ todoThis, todoList, setTodoList }) {
  console.log("TodoItem 컴포넌트 렌더링");

  const deleteTodo = useCallback(() => {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== todoThis.id));
  }, [todoThis.id, todoList, setTodoList]);

  const completeTodo = useCallback(() => {
    setTodoList(
      todoList.map((todoItem) =>
        todoItem.id === todoThis.id
          ? { ...todoThis, done: !todoThis.done, key: todoThis.id }
          : todoItem
      )
    );
  }, [todoThis, todoList, setTodoList]);

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        readOnly
        checked={todoThis.done}
        onClick={completeTodo}
        className="checkbox"
      />
      <span className="text">{todoThis.text}</span>
      <input type="button" value="X" onClick={deleteTodo} className="button" />
    </li>
  );
}

export default React.memo(TodoItem);
