import React, { useState, createContext, useReducer, useEffect } from 'react';

// let reducer = (projects, newProjects) => {
//   return { ...projects, ...newProjects };
// };

const initialState = {
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
};

const localState = JSON.parse(localStorage.getItem('projects'));

export const ProjectContext = createContext();

export const ProjectProvider = props => {
  const [projects, setProjects] = useState(localState || initialState);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  return (
    <ProjectContext.Provider value={[projects, setProjects]}>
      {props.children}
    </ProjectContext.Provider>
  );
};
