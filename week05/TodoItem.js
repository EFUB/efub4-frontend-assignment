function TodoItem({todoThis, todoList, setTodoList}){
    function deleteTodo(){
        setTodoList(todoList.filter(todoItem=>todoItem.id!==todoThis.id));
    }
    function completeTodo(){
        setTodoList(
            todoList.map((todoItem)=>{
                return todoItem.id===todoThis.id?{...todoThis, done: !todoThis.done}:todoItem;
            })
        );
    }
    return(
        <div className="todo-item">
            <input type="checkbox" checked={todoThis.done} onClick={completeTodo}></input>
            <span>{todoThis.text}</span>
            <input className="item-button" type="button" value="🗑️" onClick={deleteTodo}/>
        </div>
    )
}

export default TodoItem;