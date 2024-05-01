function TodoAdd({todoList,setTodoList}){
    function addTodo(event){
        event.preventDefault();
        const newTodoItem={
            id: Date.now(),
            text: event.target["todo-text"].value,
            done:false,
        }
        setTodoList([...todoList,newTodoItem]);
        event.target.reset();
    }
    return(
        <form className="todo-add" onSubmit={addTodo}>
            <input id="input1" type="text" name="todo-text" required placeholder="오늘의 할 일은?"></input>
            <input id="input2" type="submit" value="ADD"></input>
        </form>

    )
}

export default TodoAdd;