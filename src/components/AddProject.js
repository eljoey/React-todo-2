import React, { useState, useContext } from 'react';
import { ProjectContext } from './ProjectContext';

const AddProject = () => {
  const [name, setName] = useState('');
  const [projects, setProjects] = useContext(ProjectContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const newProject = e => {
    e.preventDefault();
    if (name === '') return;
    let newID = projects.id + 1;

    setProjects(prevProjects => ({
      projects: [
        ...prevProjects.projects,
        { id: newID, name: name, todos: [] }
      ],
      curProjID: newID,

      id: newID
    }));
    setName('');
  };

  return (
    <div>
      <form onSubmit={newProject}>
        <input
          type="text"
          placeholder="Add a Project."
          value={name}
          onChange={updateName}
        />
      </form>
    </div>
  );
};

export default AddProject;
