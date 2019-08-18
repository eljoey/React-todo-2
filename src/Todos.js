import React, { useState, useContext } from 'react';
import { ProjectContext } from './ProjectContext';
import AddTodo from './AddTodo';

const Todos = () => {
  const [projects, setProjects] = useContext(ProjectContext);

  let currentProject = projects.projects.filter(
    project => project.id === projects.curProjID
  )[0];

  let projectTodos = currentProject.todos.length ? (
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
    <p>This project has no Todos. </p>
  );

  return (
    <div className="curProject">
      <h1>{currentProject.name}</h1>
      <AddTodo />
      {projectTodos}
    </div>
  );
};

export default Todos;
