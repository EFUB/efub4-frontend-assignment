function TodoItem({ todoThis, todoList, setTodoList }) {
  function deleteTodo() {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== todoThis.id));
  }
  function editTodo() {
    // 수정 구현
    const newText = prompt("새로운 내용을 입력하세요", todoThis.text);
    if (newText !== null) {
      setTodoList(
        todoList.map((todoItem) =>
          todoItem.id === todoThis.id
            ? { ...todoItem, text: newText }
            : todoItem
        )
      );
    }
  }

  /*완료된 것 아래쪽으로 옮기기 */
  const moveCheckedToEnd = () => {
    const checkedTodos = todoList.filter((todoItem) => todoThis.done);
    const uncheckedTodos = todoList.filter((todoItem) => !todoThis.done);
    const sortedTodos = [...uncheckedTodos, ...checkedTodos];
    setTodoList(sortedTodos);
  };

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
      <input
        type="checkbox"
        class="checkbox"
        checked={todoThis.done}
        onClick={completeTodo}
      />
      <span>{todoThis.text}</span>
      <input
        type="button"
        className="editBtn"
        value="수정"
        onClick={editTodo}
      />
      <input
        type="button"
        className="deleteBtn"
        value="삭제"
        onClick={deleteTodo}
      />
    </li>
  );
}

export default TodoItem;
