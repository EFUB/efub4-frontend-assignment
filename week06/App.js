import Header from "./Header";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import logo from './logo.svg';
import React, {useEffect, useState} from "react";
import './App.css';

const TODO_LIST_KEY="todoList";

function App() {
  const [todoList,setTodoList]=useState(()=>{
    const savedTodoList=localStorage.getItem(TODO_LIST_KEY);
    return savedTodoList?JSON.parse(savedTodoList):[];
  });

  useEffect(()=>{
    localStorage.setItem(TODO_LIST_KEY,JSON.stringify(todoList));
  },[todoList]);
  
  return (
   <div className="App">
    <Header/>
      <TodoAdd todoList={todoList} setTodoList={setTodoList}/>
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
   </div>
  );
}

export default React.memo(App);
