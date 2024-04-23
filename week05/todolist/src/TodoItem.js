import { useState } from "react";

function TodoItem({ todoThis, todoList, setTodoList }) {
    const [isEditing, setIsEditing] = useState(false);

    function deleteTodo() {
        setTodoList(todoList.filter((todoItem) => todoItem.id !== todoThis.id));
    }

    function enterEditMode() {
        setIsEditing(true);
    }

    function completeTodo() {
        setTodoList(
            todoList.map((todoItem) => {
                return todoItem.id === todoThis.id
                    ? { ...todoThis, done: !todoThis.done }
                    : todoItem;
            })
        );
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
                    <input type="button" value="✏" onClick={enterEditMode} />
                </span>
            )}
            <input type="button" value="X" onClick={deleteTodo} />
        </li>
    );
}

export default TodoItem;
