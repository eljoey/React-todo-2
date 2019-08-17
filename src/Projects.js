import React from 'react';

const Projects = ({ projects }) => {
  const projectList = projects.length ? (
    projects.map(project => {
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

  return <div className="projects">{projectList}</div>;
};

export default Projects;
