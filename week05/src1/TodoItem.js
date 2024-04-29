function TodoItem({ todoThis, todoList, setTodoList }) {
  function deleteTodo() {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== todoThis.id));
  }

  function completeTodo() {
    setTodoList(
      todoList.map((todoItem) => {
        return todoItem.id === todoThis.id
          ? { ...todoThis, done: !todoThis.done }
          : todoItem;
      })
    );
  }

  return (
    <li className="todo-item">
      <input type="checkbox" checked={todoThis.done} onClick={completeTodo} />
      <span>{todoThis.text}</span>
      <input type="button" value="X" onClick={deleteTodo} />
    </li>
  );
}

export default TodoItem;
