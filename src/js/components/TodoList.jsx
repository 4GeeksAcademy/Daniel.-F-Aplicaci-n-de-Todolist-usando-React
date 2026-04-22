import React from 'react';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="mt-3 text-start">
      <div className="list-group list-group-flush">
        {todos.length === 0 ? (
          <div className="list-group-item text-center text-muted p-4 border-0">
            No hay tareas pendientes. ¡Disfruta tu día!
          </div>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="list-group-item todo-item d-flex justify-content-between align-items-center px-0 py-3"
              style={{ borderBottom: '1px solid #eee' }}
            >
              <div>
                <h6 className="mb-0 fw-normal">○ {todo.text}</h6>
              </div>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-sm text-danger delete-btn"
                title="Eliminar tarea"
              >
                Eliminar
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;