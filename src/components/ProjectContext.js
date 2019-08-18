import React, { useState, createContext, useEffect } from 'react';

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
  //loads local storage first if none then will load initial state from above
  const [projects, setProjects] = useState(localState || initialState);

  //stores projects to local storage(will update every time state changes)
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  return (
    <ProjectContext.Provider value={[projects, setProjects]}>
      {props.children}
    </ProjectContext.Provider>
  );
};
