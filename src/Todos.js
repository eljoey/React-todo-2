import React, { useState, useContext } from 'react';
import { ProjectContext } from './ProjectContext';

const Todos = () => {
  const [projects, setProjects] = useContext(ProjectContext);

  const projectTodos = projects.currentProject.todos.length ? (
    projects.currentProject.todos.map(todo => {
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
    <p>This project has no Todos. </p>
  );

  return (
    <div className="curProject">
      <h1>{projects.currentProject.name}</h1>
      {projectTodos}
    </div>
  );
};

export default Todos;
