import React, { useState, useContext } from 'react';
import { ProjectContext } from './ProjectContext';
import shortid from 'shortid';

const AddTodo = () => {
  const [content, setContent] = useState('');
  const [projects, setProjects] = useContext(ProjectContext);

  const updateContent = e => {
    setContent(e.target.value);
  };

  const newTodo = e => {
    e.preventDefault();
    if (content === '') return;
    let newID = shortid.generate();

    //index of selected project
    let index = projects.projects
      .map(project => {
        return project.id;
      })
      .indexOf(projects.curProjID);

    projects.projects[index].todos.push({
      id: newID,
      content: content
    });

    setProjects(prevProjects => ({
      projects: [...prevProjects.projects],
      curProjID: prevProjects.curProjID,
      id: prevProjects.id
    }));

    setContent('');
  };

  return (
    <div>
      <form onSubmit={newTodo}>
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
