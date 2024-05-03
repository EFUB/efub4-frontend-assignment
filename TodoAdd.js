import React from "react";
import useAddTodo from "./UseAddTodo";
function TodoAdd({todoList,setTodoList}){
    const addTodo=useAddTodo(todoList,setTodoList);
    return(
        <form className="todo-add" onSubmit={addTodo}>
            <input id="input1" type="text" name="todo-text" required placeholder="오늘의 할 일은?"></input>
            <input id="input2" type="submit" value="ADD"></input>
        </form>

    )
}
export default React.memo(TodoAdd);