import { useState } from "react";

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
        const date = new Date();
        const formattedDate = `${date.getMonth() + 1}.${date.getDate()}`;
        const updatedTodo = {
            ...todoThis,
            done: !todoThis.done,
            date: formattedDate,
        };
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
                className="check_box"
                type="checkbox"
                checked={todoThis.done}
                onClick={completeTodo}
            />
            {isEditing ? (
                <div className="con2">
                    <input
                        className="editing"
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
                        className="edit_done"
                        type="button"
                        onClick={() => {
                            setIsEditing(false);
                        }}
                    />
                </div>
            ) : (
                <div className="con1">
                    <div className="todo_text">{todoThis.text}</div>
                    {!todoThis.done && (
                        <input
                            className="edit"
                            type="button"
                            onClick={enterEditMode}
                        />
                    )}
                </div>
            )}
            {!todoThis.done && (
                <input className="delete" type="button" onClick={deleteTodo} />
            )}
            {todoThis.done && <div className="date">{todoThis.date}</div>}
        </li>
    );
}

export default TodoItem;
