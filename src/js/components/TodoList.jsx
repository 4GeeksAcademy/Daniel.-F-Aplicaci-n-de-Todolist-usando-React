import React from 'react';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="mt-4 text-start">
      <div className="list-group shadow-sm">

        {todos.length === 0 ? (
          <div className="list-group-item text-center text-muted p-4">
            No hay tareas pendientes. ¡Disfruta tu día!
          </div>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="list-group-item todo-item d-flex justify-content-between align-items-center p-3"
            >
              <div>
                <h6 className="mb-0 fw-bold">{todo.text}</h6>
                <small className="text-muted">Añadido recientemente</small>
              </div>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-outline-danger btn-sm rounded-pill delete-btn"
                title="Eliminar tarea"
              >
                🗑 Borrar
              </button>
            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default TodoList;