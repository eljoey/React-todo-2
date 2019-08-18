import React, { useState, useContext } from 'react';
import { ProjectContext } from './ProjectContext';
import shortid from 'shortid';

const AddTodo = () => {
  const [content, setContent] = useState('');
  const [projects, setProjects] = useContext(ProjectContext);

  const updateContent = e => {
    setContent(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    let newID = shortid.generate();
    let currentProjectTodos = projects.projects[projects.curProjID].todos;
    projects.projects[projects.curProjID].todos = [
      ...currentProjectTodos,
      {
        id: newID,
        content: content
      }
    ];

    setProjects(prevProjects => ({
      projects: [...prevProjects.projects],
      curProjID: prevProjects.curProjID,
      id: prevProjects.id
    }));

    setContent('');
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add a Todo to your Project."
          value={content}
          onChange={updateContent}
        />
      </form>
    </div>
  );
};

export default AddTodo;
