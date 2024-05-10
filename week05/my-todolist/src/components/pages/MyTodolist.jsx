import { useEffect, useState } from "react";

import Header from "../../Header";
import TodoList from "../../TodoList";
import TodoAdd from "../../TodoAdd";
import "../../App.css";

const TODO_LIST_KEY = "todoList";

function MyTodolist() {
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem(TODO_LIST_KEY);
    return savedTodoList ? JSON.parse(savedTodoList) : [];
  });

  useEffect(() => {
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList));
  }, [todoList]);

  // 임시 state 생성
  //const [tempState, setTempState] = useState(0);

  return (
    <div className="todoBack">
      <div className="myTodolist">
        <Header title="오늘 할 일 목록" />
        <TodoAdd todoList={todoList} setTodoList={setTodoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
}

export default MyTodolist;
