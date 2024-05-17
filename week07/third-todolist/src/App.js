import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoPage from './TodoPage';
import Nirvana from './Nirvana';
import './App.css';

const TODOS_KEY = "todoList";

const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const savedTodoList = localStorage.getItem(key);
    return savedTodoList ? JSON.parse(savedTodoList) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

  function App() {
    const [todoList, setTodoList] = useLocalStorageState(TODOS_KEY, []);
  
    return (
      <Router>
        <Routes>
          <Route path="/" element={<TodoPage todoList={todoList} setTodoList={setTodoList} />} />
          <Route path="/solution" element={<Nirvana />} />
        </Routes>
      </Router>
    );
}

export default App;
