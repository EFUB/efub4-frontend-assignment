import React, { useState, useCallback } from 'react';

function TodoItem({ todoThis, todoList, setTodoList }) {
    const [editingText, setEditingText] = useState(todoThis.text);
    const [isEditing, setIsEditing] = useState(false);

    const deleteTodo = useCallback(() => {
        setTodoList(prevTodoList => prevTodoList.filter(todoItem => todoItem.id !== todoThis.id));
    }, [setTodoList, todoThis.id]);

    const completeTodo = useCallback(() => {
        const currentTime = new Date().toLocaleTimeString();

        setTodoList(prevTodoList =>
            prevTodoList.map(todoItem => {
                return todoItem.id === todoThis.id ? { ...todoThis, done: !todoThis.done, checkedTime: currentTime } : todoItem;
            })
        );
    }, [setTodoList, todoThis]);

    function handleTextChange(event) {
        setEditingText(event.target.value);
    }

    function handleTextSave() {
        setTodoList(prevTodoList =>
            prevTodoList.map(todoItem => {
                return todoItem.id === todoThis.id ? { ...todoThis, text: editingText } : todoItem;
            })
        );
        setIsEditing(false);
    }

    return (
        <li className="todo-item">
            <input type="checkbox" checked={todoThis.done} onChange={completeTodo} className="check-btn"/>
            {isEditing ? (
                <input 
                    type="text" 
                    value={editingText} 
                    onChange={handleTextChange} 
                    onBlur={handleTextSave}
                />
            ) : (
                <span className={todoThis.done ? "done-text" : ""}>{todoThis.text}</span>
            )}
            {todoThis.checkedTime && todoThis.done && <span>{todoThis.checkedTime}</span>}
            {todoThis.done && <span>에 내가 해냄! </span>}
            <input type="button" value={isEditing ? "저장" : "수정"} onClick={() => setIsEditing(!isEditing)} className="edit-btn"/>
            <input type="button" value="X" onClick={deleteTodo} className="del-btn"/>
        </li>
    )
}

export default TodoItem;
