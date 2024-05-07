import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, setTodoList }) => {
	return (
		<TodoListBlock>
			{todoList.map((todo) => (
				<TodoItem
					id={todo.id}
					text={todo.text}
					done={todo.done}
					key={todo.id}
					todoList={todoList}
					setTodoList={setTodoList}
				/>
			))}
		</TodoListBlock>
	);
};

export default TodoList;

const TodoListBlock = styled.div`
	flex: 1;
	padding: 20px 32px;
	padding-bottom: 48px;
	overflow-y: auto;
`;
