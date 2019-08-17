import React, { useState } from 'react';

const ProjectList = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "DailyDo's",
      todos: [
        { id: 1, content: 'Wake up' },
        { id: 2, content: 'Odin Project' },
        { id: 3, content: 'Sleep' }
      ]
    },
    {
      id: 2,
      name: "WeeklyDo's",
      todos: [
        { id: 1, content: 'Finish Project' },
        { id: 2, content: 'Find New Project' },
        { id: 3, content: 'Start New Project' }
      ]
    }
  ]);

  const [currentProject, setCurrentProject] = useState([]);

  return (
      {projects.map(project => (
          <li></li>
      ))}
  );
};

export default ProjectList;