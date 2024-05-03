import {useCallback} from "react";
function useAddTodo({todoList,setTodoList}){
    return useCallback((event)=>{
        event.preventDefault();
        const newTodoItem={
            id: Date.now(),
            text: event.target["todo-text"].value,
            done:false,
        };
        setTodoList([...todoList,newTodoItem]);
        event.target.reset();
    },[todoList,setTodoList]);
}
export default useAddTodo;