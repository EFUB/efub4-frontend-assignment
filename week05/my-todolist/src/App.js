import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import useTheme from "./useTheme";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Weather from "./Weathear";

const TODO_LIST_KEY = "todoList";

function Home({ todoList, setTodoList, toggleTheme, buttonEmoji }) {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="center_">
        <div className="topbox">
          <button className="changeButton" onClick={toggleTheme}>
            {buttonEmoji}
          </button>
          <button
            className="weather"
            onClick={() => {
              navigate("/weather");
            }}
          >
            🌈
          </button>
        </div>
      </div>

      <Header />
      <TodoAdd todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

function App() {
  const [todoList, setTodoList] = useState(() => {
    const saveTodoList = localStorage.getItem(TODO_LIST_KEY);
    return saveTodoList ? JSON.parse(saveTodoList) : [];
  });
  useEffect(() => {
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList));
  }, [todoList]);
  const { toggleTheme, buttonEmoji } = useTheme();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              todoList={todoList}
              setTodoList={setTodoList}
              toggleTheme={toggleTheme}
              buttonEmoji={buttonEmoji}
            />
          }
        />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
