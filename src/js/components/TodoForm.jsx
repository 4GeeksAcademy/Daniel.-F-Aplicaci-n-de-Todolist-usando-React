import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return; // No agregar tareas vacías
    addTodo(value);
    setValue(''); // Limpiar input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Añadir nueva tarea..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TodoForm;