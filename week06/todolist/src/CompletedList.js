import TodoItem from "./TodoItem";
import React from "react";

function CompletedList({
    todoList,
    setTodoList,
    completedList,
    setCompletedList,
}) {
    return (
        <ul className="completed-list">
            {completedList.map((todoItem) => {
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

export default React.memo(CompletedList);
