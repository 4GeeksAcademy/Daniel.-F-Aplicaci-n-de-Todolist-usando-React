import React, { useState } from "react"; 
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Home() {
    const [todos, setTodos] = useState([]);
	

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text: text, isCompleted: false };
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '500px' }}>
            <div className="card shadow-sm">
                <div className="card-body">
                    <h1 className="text-center mb-4">Tareas</h1>
                    
                    {/* EXPLICACIÓN DEL CONTADOR: 
                        Usamos todos.length para saber cuántos elementos hay en el array */}
                    <div className="alert alert-info text-center py-2">
                        Tienes <strong>{todos.length}</strong> artículos en tu lista
                    </div>
					<div className="d-flex justify-content-center">
                    <TodoForm addTodo={addTodo} />
					</div>
                    <TodoList todos={todos} deleteTodo={deleteTodo} />
                </div>
            </div>
        </div>
    );
}

export default Home;