import React,{useCallback} from "react";
function TodoAdd({todoList,setTodoList}){
   const addTodo=useCallback((event)=>{
        event.preventDefault();
        const newTodoItem={
            id: Date.now(),
            text: event.target["todo-text"].value,
            done:false,
        };
        setTodoList([...todoList,newTodoItem]);
        event.target.reset();
    },[todoList,setTodoList]);
    return(
        <form className="todo-add" onSubmit={addTodo}>
            <input id="input1" type="text" name="todo-text" required placeholder="오늘의 할 일은?"></input>
            <input id="input2" type="submit" value="ADD"></input>
        </form>

    )
}

export default React.memo(TodoAdd);