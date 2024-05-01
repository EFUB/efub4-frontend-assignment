import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import { useEffect, useState } from "react";

const TODO_LIST_KEY = "todoList";

function App() {
  const [todoList, setTodoList] = useState(() => {
    const saveTodoList = localStorage.getItem(TODO_LIST_KEY);
    return saveTodoList ? JSON.parse(saveTodoList) : [];
  });

  useEffect(() => {
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList));
  }, [todoList]);
  return (
    <div className="App">
      <Header />
      <TodoAdd todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
