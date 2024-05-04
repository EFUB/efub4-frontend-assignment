function TodoAdd({ todoList, setTodoList }) {
  function addTodo(event) {
    event.preventDefault();
    const newTodoItem = {
      id: Date.now(),
      text: event.target["todo-text"].value,
      done: false,
    };
    setTodoList([newTodoItem, ...todoList]); // 새로 입력하는 할 일이 맨 위에 오도록 수정
    event.target.reset();
  }

  return (
    <form className="todo-add" onSubmit={addTodo}>
      <input
        type="text"
        name="todo-text"
        id="todo-text"
        required
        placeholder="할 일을 입력 후, Enter 를 누르세요."
      />
      <input type="submit" id="submitBtn" value="+" />
    </form>
  );
}

export default TodoAdd;
