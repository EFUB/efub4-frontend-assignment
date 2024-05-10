import Header from "../components/Header";
import TodoList from "../components/TodoList";
import CompletedList from "../components/CompletedList";
import TodoAdd from "../components/TodoAdd";
import "../css/Todo.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backArrow from "../image/backarrow.png";

const TODO_LIST_KEY = "todoList";
const COMPLETED_LIST_KEY = "completedList";

const TodoPage = () => {
    const [todoList, setTodoList] = useState(() => {
        const savedTodoList = localStorage.getItem(TODO_LIST_KEY);
        return savedTodoList ? JSON.parse(savedTodoList) : [];
    });

    const [completedList, setCompletedList] = useState(() => {
        const savedCompletedList = localStorage.getItem(COMPLETED_LIST_KEY);
        return savedCompletedList ? JSON.parse(savedCompletedList) : [];
    });

    useEffect(() => {
        localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList));
    }, [todoList]);

    useEffect(() => {
        localStorage.setItem(COMPLETED_LIST_KEY, JSON.stringify(completedList));
    }, [completedList]);

    return (
        <>
            <Header />
            <div className="line1"></div>
            <TodoList
                todoList={todoList}
                setTodoList={setTodoList}
                completedList={completedList}
                setCompletedList={setCompletedList}
            />
            <TodoAdd todoList={todoList} setTodoList={setTodoList} />
            <CompletedList
                todoList={todoList}
                setTodoList={setTodoList}
                completedList={completedList}
                setCompletedList={setCompletedList}
            />
            <Link to="/">
                <img className="back" src={backArrow} />
            </Link>
        </>
    );
};

export default TodoPage;
