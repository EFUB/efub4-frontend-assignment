import React, { useState } from 'react';

function TodoItem({ todoThis, todoList, setTodoList }) 
{
    const [checkedTime, setCheckedTime] = useState(null);
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

    return (
        <li className="todo-item">
            <input type="checkbox" checked={todoThis.done} onChange={completeTodo} className="check-btn"/>
            <span className={todoThis.done ? "done-text" : ""}>{todoThis.text}</span>
            {todoThis.checkedTime && <span>{todoThis.checkedTime}</span>}
            {todoThis.done && <span>에 내가 해냄! </span>}
            <input type="button" value="삭제" onClick={deleteTodo} className="del-btn"/>
        </li>
    )
}

export default TodoItem;