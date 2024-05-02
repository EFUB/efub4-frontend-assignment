import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import { useCallback, useEffect, useState } from "react";

const TODO_LIST_KEY = "todoList";

// 커스텀 훅 이용해 배경 색 변경 코드
function useTheme(theme, toggleTheme) {
  useEffect(() => {
    document.documentElement.style.backgroundColor =
      theme === "light" ? "#f2eae4" : "black";
  }, [theme, toggleTheme]);
}

function App() {
  const [todoList, setTodoList] = useState(() => {
    const saveTodoList = localStorage.getItem(TODO_LIST_KEY);
    return saveTodoList ? JSON.parse(saveTodoList) : [];
  });
  /*const [theme, setTheme] = useState("light");
  const [buttonEmoji, setButtonEmoji] = useState("🌞");

  const toggleTheme = useCallback(() => {
    if (theme == "light") {
      setTheme("dark");
      setButtonEmoji("🌛");
    } else if (theme == "dark") {
      setTheme("light");
      setButtonEmoji("🌞");
    }
  }, [theme]);
  useEffect(() => {
    // theme 상태가 변경될 때마다 배경색을 변경
    document.documentElement.style.backgroundColor =
      theme === "light" ? "#f2eae4" : "black";
  }, [theme]);
  useEffect(() => {
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList));
  }, [todoList]);*/

  const [theme, setTheme] = useState("light");
  const [buttonEmoji, setButtonEmoji] = useState("🌞");

  const toggleTheme = useCallback(() => {
    if (theme == "light") {
      setTheme("dark");
      setButtonEmoji("🌛");
    } else if (theme == "dark") {
      setTheme("light");
      setButtonEmoji("🌞");
    }
  }, [theme]);

  useTheme(theme, toggleTheme);
  return (
    <div className="App">
      <button className="changeButton" onClick={toggleTheme}>
        {buttonEmoji}
      </button>
      <Header />
      <TodoAdd todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
