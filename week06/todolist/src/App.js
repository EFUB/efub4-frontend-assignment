import Header from "./Header";
import TodoList from "./TodoList";
import CompletedList from "./CompletedList";
import TodoAdd from "./TodoAdd";
import "./App.css";
import React, { useEffect, useState } from "react";

const TODO_LIST_KEY = "todoList";
const COMPLETED_LIST_KEY = "completedList";

function App() {
    const [dummy, setDummy] = useState(true);
    function renderingTest() {
        setDummy(!dummy);
    }

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
        <div className="App">
            <div className="container">
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
                <button onClick={renderingTest}>렌더링 테스트</button>
            </div>
        </div>
    );
}

export default App;
