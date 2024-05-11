import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const TodoPage = ({ todoList, setTodoList }) => {
    return (
        <div className="App">
        <Header />
            <TodoList todoList={todoList} setTodoList={setTodoList} />
            <TodoAdd todoList={todoList} setTodoList={setTodoList} />
        <Link to="/solution">열반으로 가는 길</Link>
        </div>
    );
};

export default TodoPage;
