import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "EFUB 리액트 과제 제출",
      done: true,
    },
    {
      id: 2,
      text: "시험공부",
      done: false,
    },
    {
      id: 3,
      text: "강의 듣기",
      done: false,
    },
  ]);
  return (
    <div className="App">
      <Header />
      <TodoAdd todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
