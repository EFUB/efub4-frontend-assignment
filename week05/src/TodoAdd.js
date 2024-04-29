function TodoAdd({ todoList, setTodoList }) {    
    function addTodo(event) {
        event.preventDefault();
        const newTodoItem = {
            id: Date.now(),
            text: event.target["todo-text"].value,
            done: false,
        }
        setTodoList([...todoList, newTodoItem]);
        event.target.reset();
    }

    return (
        <form className="todo-add" onSubmit={addTodo}>
            <input type="text" name="todo-text" className="todo-text" required placeholder="오늘의 할 일은?" />
            <input type="submit" className="submit" value="+" />
        </form>
    )
}

export default TodoAdd;