import React, { useState, createContext } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = props => {
  const [projects, setProjects] = useState({
    projects: [
      {
        id: 0,
        name: "DailyDo's",
        todos: [
          { id: 1, content: 'Wake up' },
          { id: 2, content: 'Odin Project' },
          { id: 3, content: 'Sleep' }
        ]
      },
      {
        id: 1,
        name: "WeeklyDo's",
        todos: [
          { id: 1, content: 'Finish Project' },
          { id: 2, content: 'Find New Project' },
          { id: 3, content: 'Start New Project' }
        ]
      }
    ],
    curProjID: 0,
    id: 1
  });

  return (
    <ProjectContext.Provider value={[projects, setProjects]}>
      {props.children}
    </ProjectContext.Provider>
  );
};
