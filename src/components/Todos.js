import React, { useContext } from 'react';
import { ProjectContext } from './ProjectContext';
import AddTodo from './AddTodo';

const Todos = () => {
  const [projects, setProjects] = useContext(ProjectContext);

  //index of selected project
  const index = projects.projects
    .map(project => {
      return project.id;
    })
    .indexOf(projects.curProjID);

  const delTodo = clickedTodo => {
    //filters out deleted todo
    const filteredTodos = projects.projects[index].todos.filter(
      todo => todo.id !== clickedTodo.id
    );

    //set filteredTodos to be new info
    projects.projects[index].todos = filteredTodos;

    setProjects(prevProjects => ({
      projects: [...prevProjects.projects],
      curProjID: prevProjects.curProjID,
      id: prevProjects.id
    }));
  };

  const projectTodos = projects.projects[index].todos.length ? (
    projects.projects[index].todos.map(todo => {
      return (
        <div key={todo.id}>
          <div className="todos">
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
    <p>This project has no Todos. Use the form above to add some! </p>
  );

  return (
    <div className="curProject">
      <h1>{projects.projects[index].name}</h1>
      <AddTodo />
      <div className="todo-container">{projectTodos}</div>
    </div>
  );
};

export default Todos;
