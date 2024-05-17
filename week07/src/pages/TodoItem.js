import React,{useCallback} from "react";

function TodoItem({todoThis, todoList, setTodoList}){
    const deleteTodo=useCallback(()=>{
        setTodoList(todoList.filter(todoItem=>todoItem.id!==todoThis.id));
    },[todoThis,todoList,setTodoList]);
    const completeTodo=useCallback(()=>{
        setTodoList(
            todoList.map((todoItem)=>{
                return todoItem.id===todoThis.id?{...todoThis, done: !todoThis.done}:todoItem;
            })
        );
    },[todoThis,todoList,setTodoList]);
    return(
        <div className="todo-item">
            <input type="checkbox" checked={todoThis.done} onClick={completeTodo}></input>
            <span>{todoThis.text}</span>
            <input className="item-button" type="button" value="🗑️" onClick={deleteTodo}/>
        </div>
    )
}

export default React.memo(TodoItem);