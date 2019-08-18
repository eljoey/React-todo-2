import React, { useState, useContext } from 'react';
import { ProjectContext } from './ProjectContext';
import AddProject from './AddProject';

const Projects = () => {
  const [projects, setProjects] = useContext(ProjectContext);

  const selectProject = proj => {
    setProjects(prevProjects => ({
      projects: [...prevProjects.projects],
      curProjID: proj.id,
      id: prevProjects.id
    }));
    console.log(proj.id);
  };

  const projectList = projects.projects.length ? (
    projects.projects.map(project => {
      return (
        <div key={project.id} className="projects-info">
          <div
            onClick={() => {
              selectProject(project);
            }}
          >
            {project.name}
          </div>
          <i className="fas fa-trash" />
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
