import { useState } from "react";
import CompletedList from "./CompletedList";

function TodoItem({
    todoThis,
    todoList,
    setTodoList,
    completedList,
    setCompletedList,
}) {
    const [isEditing, setIsEditing] = useState(false);

    function deleteTodo() {
        setTodoList(todoList.filter((todoItem) => todoItem.id !== todoThis.id));
    }
    function deleteCompleted() {
        setCompletedList(
            completedList.filter((todoItem) => todoItem.id !== todoThis.id)
        );
    }

    function enterEditMode() {
        setIsEditing(true);
    }

    function completeTodo() {
        const updatedTodo = { ...todoThis, done: !todoThis.done };
        if (todoThis.done) {
            setTodoList([...todoList, updatedTodo]);
            deleteCompleted(todoThis);
        } else {
            setCompletedList([...completedList, updatedTodo]);
            deleteTodo(todoThis);
        }
    }

    return (
        <li className="todo-item">
            <input
                type="checkbox"
                checked={todoThis.done}
                onClick={completeTodo}
            />
            {isEditing ? (
                <span>
                    <input
                        type="text"
                        defaultValue={todoThis.text}
                        onChange={(event) =>
                            setTodoList(
                                todoList.map((todoItem) => {
                                    return todoItem.id === todoThis.id
                                        ? {
                                              ...todoItem,
                                              text: event.target.value,
                                          }
                                        : todoItem;
                                })
                            )
                        }
                    />

                    <input
                        type="button"
                        value="✅"
                        onClick={() => {
                            setIsEditing(false);
                        }}
                    />
                </span>
            ) : (
                <span>
                    <span>{todoThis.text}</span>
                    {!todoThis.done && (
                        <input
                            type="button"
                            value="✏"
                            onClick={enterEditMode}
                        />
                    )}
                </span>
            )}
            {!todoThis.done && (
                <input type="button" value="X" onClick={deleteTodo} />
            )}
        </li>
    );
}

export default TodoItem;
