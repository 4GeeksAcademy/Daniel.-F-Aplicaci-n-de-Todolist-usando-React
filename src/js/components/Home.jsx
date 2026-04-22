import React, { useState } from "react"; 
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Home() {
	const [todos, setTodos] = useState([
	]);

	const addTodo = (text) => {
		const newTodo = { id: Date.now(), text: text, isCompleted: false };
		setTodos([...todos, newTodo]);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	return (
		<div className="container mt-5 text-center" >
			<h1>Lista de Tareas</h1>
			<TodoForm addTodo={addTodo} />
			<TodoList todos={todos} deleteTodo={deleteTodo} />

		</div>
	);
}

export default Home;