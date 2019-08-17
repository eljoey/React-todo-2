import React from 'react';

const Todos = ({ currentProject }) => {
  const projectTodos = currentProject.todos.length ? (
    currentProject.todos.map(todo => {
      return (
        <div key={todo.id}>
          <div>
            {todo.content}
            <i className="fas fa-trash" />
          </div>
        </div>
      );
    })
  ) : (
    <p>You have no Projects!</p>
  );

  return (
    <div className="curProject">
      <h1>{currentProject.name}</h1>
      {projectTodos}
    </div>
  );
};

export default Todos;
