import React, { useEffect, useState, useCallback, useMemo } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd"
import './App.css';

const TODOS_KEY = "todoList";

// 로컬스토리지 저장 정보 커스텀 훅
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

// 테스트 버튼 컴포넌트
const TestButton = React.memo(({ onClick }) => {
  console.log("테스트 버튼 렌더");
  return <button onClick={onClick}> 테스트 버튼 </button>;
});

function App() 
{
  const [todoList, setTodoList] = useLocalStorageState(TODOS_KEY, []);

  const TestButtonClick = useCallback(() => {
    console.log("테스트 버튼 클릭");
  }, []);

  const memoizedTodoList = useMemo(() => todoList, [todoList]);

  return (
    <div className="App">
      <Header />
      <TodoList todoList={memoizedTodoList} setTodoList={setTodoList} />
      <TodoAdd todoList={memoizedTodoList} setTodoList={setTodoList} />
      <TestButton onClick={TestButtonClick} /> 
    </div>
  );
}

export default App;
