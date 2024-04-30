import React, { useState } from 'react';

function TodoItem({ todoThis, todoList, setTodoList }) 
{
    const [checkedTime, setCheckedTime] = useState(null);
    const [editingText, setEditingText] = useState(todoThis.text);
    const [isEditing, setIsEditing] = useState(false); // 수정 모드를 관리하는 state 추가

    function deleteTodo() 
    {
        setTodoList(todoList.filter(todoItem => todoItem.id !== todoThis.id));
    }

    function completeTodo() 
    {
        const currentTime = new Date().toLocaleTimeString();
        setCheckedTime(currentTime);

        setTodoList(
            todoList.map((todoItem) => 
            {
                return todoItem.id === todoThis.id ? { ...todoThis, done: !todoThis.done, checkedTime: currentTime } : todoItem;
            })
        );
    }

    function handleTextChange(event) {
        setEditingText(event.target.value);
    }

    function handleTextSave() {
        setTodoList(
            todoList.map((todoItem) => 
            {
                return todoItem.id === todoThis.id ? { ...todoThis, text: editingText } : todoItem;
            })
        );
        setIsEditing(false); // 수정이 완료되면 수정 모드 비활성화
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
            {todoThis.checkedTime && <span>{todoThis.checkedTime}</span>}
            {todoThis.done && <span>에 내가 해냄! </span>}
            <input type="button" value="삭제" onClick={deleteTodo} className="del-btn"/>
            <input type="button" value={isEditing ? "저장" : "수정"} onClick={() => setIsEditing(!isEditing)} className="edit-btn"/>
        </li>
    )
}

export default TodoItem;
