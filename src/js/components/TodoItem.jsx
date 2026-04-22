import React from 'react';

function TodoItem({ todo, deleteTodo }) {
  return (
    <li style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
      {todo.text}
      <div
        key={todo.id}
        className="list-group-item todo-item d-flex justify-content-between align-items-center p-3">
        </div>
      <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
    </li>
  );
}

export default TodoItem;