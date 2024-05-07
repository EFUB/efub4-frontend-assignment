import React, { useMemo } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todoList, setTodoList }) {
  console.log("TodoList 컴포넌트 렌더링");
  const memoizedTodoItems = useMemo(() => {
    return todoList.map((todoItem) => (
      <TodoItem
        key={todoItem.id}
        todoThis={todoItem}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    ));
  }, [todoList, setTodoList]);

  return (
    <div className="todo-list">
      <ul>{memoizedTodoItems}</ul>
    </div>
  );
}

export default React.memo(TodoList);
