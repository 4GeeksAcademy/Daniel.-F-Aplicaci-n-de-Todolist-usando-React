import React from 'react';

function TodoItem({ todo, deleteTodo }) {
  return (
    <li style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
    </li>
  );
}

export default TodoItem;