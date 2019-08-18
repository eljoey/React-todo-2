import React, { useContext } from 'react';
import { ProjectContext } from './ProjectContext';
import AddTodo from './AddTodo';

const Todos = () => {
  const [projects] = useContext(ProjectContext);

  let currentProject = projects.projects.filter(
    project => project.id === projects.curProjID
  )[0];

  const delTodo = () => {
    //Add ability to del todos use add todo as ref
  };

  let projectTodos = currentProject.todos.length ? (
    currentProject.todos.map(todo => {
      return (
        <div key={todo.id}>
          <div>
            {todo.content}
            <i
              className="fas fa-trash"
              onClick={() => {
                delTodo(todo);
              }}
            />
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
