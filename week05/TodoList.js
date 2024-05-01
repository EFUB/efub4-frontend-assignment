import TodoItem from "./TodoItem";

function TodoList({todoList, setTodoList}){
    return(
        <ul className="todo-list">
            {todoList.map((todoItem)=>{
                return(
                    <TodoItem 
                        todoThis={todoItem}
                        todoList={todoList}
                        setTodoList={setTodoList}
                    />
                );
            })}
        </ul>
    )
}
export default TodoList;