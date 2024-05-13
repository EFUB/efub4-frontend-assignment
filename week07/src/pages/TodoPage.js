import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import TodoTemplate from "../components/TodoTemplate";
import TodoHead from "../components/TodoHead";
import TodoList from "../components/TodoList";
import TodoCreate from "../components/TodoCreate";

const TodoPage = () => {
	const [todoList, setTodoList] = useState(() => {
		const localTodoList = localStorage.getItem("localTodoList");
		return localTodoList ? JSON.parse(localTodoList) : [];
	});
	useEffect(() => {
		localStorage.setItem("localTodoList", JSON.stringify(todoList));
	}, [todoList]);

	// 리렌더링 테스트를 위한 state
	const [value, setValue] = useState(0);

	return (
		<>
			<NavBar />
			{/* <button onClick={() => setValue(value + 1)}>테스트 버튼</button> */}
			<TodoTemplate>
				<TodoHead todoList={todoList} />
				<TodoList todoList={todoList} setTodoList={setTodoList} />
				<TodoCreate todoList={todoList} setTodoList={setTodoList} />
			</TodoTemplate>
		</>
	);
};

export default TodoPage;
