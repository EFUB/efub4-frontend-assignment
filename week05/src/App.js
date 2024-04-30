import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;
function App() {
	const [todoList, setTodoList] = useState(() => {
		const localTodoList = localStorage.getItem("localTodoList");
		return localTodoList ? JSON.parse(localTodoList) : initialTodo;
	});
	useEffect(() => {
		localStorage.setItem("localTodoList", JSON.stringify(todoList));
	}, [todoList]);
	return (
		<>
			<GlobalStyle />
			<TodoTemplate>
				<TodoHead todoList={todoList} />
				<TodoList todoList={todoList} setTodoList={setTodoList} />
				<TodoCreate todoList={todoList} setTodoList={setTodoList} />
			</TodoTemplate>
		</>
	);
}

export default App;

const initialTodo = [
	{
		id: 1,
		text: "아침 산책",
		done: true,
	},
	{
		id: 2,
		text: "오늘의 뉴스 읽기",
		done: true,
	},
	{ id: 3, text: "샌드위치 사 먹기", done: false },
	{ id: 4, text: "리액트 공부하기", done: false },
];
