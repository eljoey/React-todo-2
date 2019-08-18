import React, { useState, useContext } from 'react';
import { ProjectContext } from './ProjectContext';
import AddProject from './AddProject';

const Projects = () => {
  const [projects, setProjects] = useContext(ProjectContext);

  const projectList = projects.projects.length ? (
    projects.projects.map(project => {
      return (
        <div key={project.id}>
          <div>
            {project.name}
            <i className="fas fa-trash" />
          </div>
        </div>
      );
    })
  ) : (
    <p>You have no Projects!</p>
  );

  return (
    <div className="projects">
      <h1>Projects</h1>
      <AddProject />
      <div>{projectList}</div>
    </div>
  );
};

export default Projects;
