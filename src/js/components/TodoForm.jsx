import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(''); // Estado para el mensaje de error

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación: vacío o menos de 3 caracteres
    if (!value.trim()) {
      setError("¡No hay nada escrito!");
      return;
    }

    if (value.trim().length < 3) {
      setError("La tarea debe tener al menos 3 caracteres");
      return;
    }

    // Si pasa la validación
    addTodo(value);
    setValue('');
    setError(''); // Limpiamos el error
  };

  return (
    <div className="w-100">
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          value={value}
          placeholder="Añadir nueva tarea..."
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError(''); // Limpia el error mientras el usuario escribe
          }}
        />
      </form>

      {/* Mensaje de error con estilo de la lista en rojo */}
      {error && (
        <div className="list-group mt-2">
          <div className="list-group-item border-0 p-2" style={{ color: 'red', fontSize: '0.9rem' }}>
            ⚠ {error}
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoForm;