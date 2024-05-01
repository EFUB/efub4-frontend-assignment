import "./TodoItem.css";

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
    <div className="todobody">
      <li className="todo-list">
        <input type="checkbox" checked={todoThis.done} onClick={completeTodo} />
        <span className="text-todo">{todoThis.text}</span>
        <input type="button" value="X" onClick={deleteTodo} />
      </li>
    </div>
  );
}

export default TodoItem;
