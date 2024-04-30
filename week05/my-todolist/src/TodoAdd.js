function TodoAdd({ todoList, setTodoList}) 
{
    function addTodo(event) 
    {
        event.preventDefault();
        const newTodoItem = 
        {
            id: Date.now(),
            text: event.target["todo-text"].value,
            done: false
        }
        setTodoList([...todoList, newTodoItem]);
        event.target.reset();
    }

    return (
        <form className="todo-add" onSubmit={addTodo}>
            <input type="text" name="todo-text" required placeholder="당신이 미룬 업보를 고백하세요..." className="input"/>
            <input type="submit" value="+" className="plus-btn"/>
        </form>
    )
}

export default TodoAdd;