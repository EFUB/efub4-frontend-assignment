import React, { useState, useEffect } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import "./App.css";
const TODO_LIST_KEY = "todolist";

function App() {
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem(TODO_LIST_KEY);
    return savedTodoList ? JSON.parse(savedTodoList) : [];
  });

  useEffect(() => {
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const [temp, setTemp] = useState(0);
  const handleTemp = () => {
    setTemp(temp + 1);
  };
  return (
    <div className="App">
      <Header />
      <button className="state" onClick={handleTemp}>
        부모 컴포넌트 업데이트
      </button>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <TodoAdd todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
