import TodoItem from "./TodoItem";

function TodoList({ todoList, setTodoList }) {
    return (
        <div className="todo-list">
            <ul>
                {todoList.map((todoItem) => {
                    return (
                        <TodoItem
                            todoThis={todoItem}
                            todoList={todoList}
                            setTodoList={setTodoList}
                        />
                    );
                })}
            </ul>
        </div>
    )
}

export default TodoList;