function TodoAdd({ todoList, setTodoList }) {
    function addTodo(event) {
        event.preventDefault();
        const newTodoItem = {
            id: Date.now(),
            text: event.target["todo-text"].value,
            done: false,
            date: null,
        };
        setTodoList([...todoList, newTodoItem]);
        event.target.reset();
    }
    return (
        <form className="todo-add" onSubmit={addTodo}>
            <input
                className="todo-write"
                type="text"
                name="todo-text"
                required
                placeholder=" 오늘의 할 일"
            ></input>
            <input className="todo-submit" type="submit" value=""></input>
        </form>
    );
}

export default TodoAdd;
