import React, { useState, useMemo, useCallback } from "react";

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

    const toggleEdit = useCallback(() => {
        setIsEditing((prev) => !prev);
    }, []);

    const completeTodo = useCallback(() => {
        const date = new Date();
        const formattedDate = `${date.getMonth() + 1}.${date.getDate()}`;
        const updatedTodo = {
            ...todoThis,
            done: !todoThis.done,
            date: formattedDate,
        };
        if (todoThis.done) {
            setTodoList((prevList) => [...prevList, updatedTodo]);
            deleteCompleted(todoThis);
        } else {
            setCompletedList([...completedList, updatedTodo]);
            deleteTodo(todoThis);
        }
    }, [todoThis, setTodoList, setCompletedList, deleteTodo, deleteCompleted]);

    const editingContent = useMemo(() => {
        return (
            <div className="con2">
                <input
                    className="editing"
                    type="text"
                    defaultValue={todoThis.text}
                    onChange={(event) => {
                        setTodoList((prevList) =>
                            prevList.map((item) =>
                                item.id === todoThis.id
                                    ? { ...item, text: event.target.value }
                                    : item
                            )
                        );
                    }}
                />

                <input
                    className="edit_done"
                    type="button"
                    onClick={toggleEdit}
                />
            </div>
        );
    }, [todoThis.text, setTodoList, toggleEdit]);

    const viewContent = useMemo(() => {
        return (
            <div className="con1">
                <div className="todo_text">{todoThis.text}</div>
                {!todoThis.done && (
                    <input
                        className="edit"
                        type="button"
                        onClick={toggleEdit}
                    />
                )}
            </div>
        );
    }, [todoThis.text, todoThis.done, toggleEdit]);

    return (
        <li className="todo-item">
            <input
                className="check_box"
                type="checkbox"
                checked={todoThis.done}
                onClick={completeTodo}
            />
            {isEditing ? editingContent : viewContent}
            {!todoThis.done && (
                <input className="delete" type="button" onClick={deleteTodo} />
            )}
            {todoThis.done && <div className="date">{todoThis.date}</div>}
        </li>
    );
}

export default TodoItem;
