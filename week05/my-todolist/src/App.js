import { useEffect, useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import StateTest from "./StateTest";
import "./App.css";

const TODO_LIST_KEY = "todoList";

function App() {
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem(TODO_LIST_KEY);
    return savedTodoList ? JSON.parse(savedTodoList) : [];
  });

  useEffect(() => {
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="App">
      <StateTest />
      <Header />
      <TodoAdd todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
