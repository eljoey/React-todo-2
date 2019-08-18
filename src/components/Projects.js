import React, { useContext } from 'react';
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
  };

  const delProject = proj => {
    let validProjects = projects.projects.filter(
      project => project.id !== proj.id
    );

    let check = projects.curProjID;

    //If currently selected Project gets deleted it will default to the first project
    const isDelProjCurrent = proj => {
      if (proj.id === projects.curProjID) {
        check = validProjects[0].id;
      } else {
        check = projects.curProjID;
      }
    };

    setProjects(prevProjects => ({
      projects: [...validProjects],
      curProjID: check,
      id: prevProjects.id
    }));
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
          <i
            className="fas fa-trash"
            onClick={() => {
              delProject(project);
            }}
          />
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
