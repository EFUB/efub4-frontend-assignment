import TodoItem from "./TodoItem";
import React from "react";

function TodoList({ todoList, setTodoList, completedList, setCompletedList }) {
    return (
        <ul className="todo-list">
            {todoList.map((todoItem) => {
                return (
                    <TodoItem
                        todoThis={todoItem}
                        todoList={todoList}
                        setTodoList={setTodoList}
                        completedList={completedList}
                        setCompletedList={setCompletedList}
                    />
                );
            })}
        </ul>
    );
}

export default React.memo(TodoList);
