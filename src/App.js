import React, { Component } from 'react';
import './App.css';
import Projects from './Projects';
import Todos from './Todos';

class App extends Component {
  state = {
    projects: [
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
    ],
    currentProject: {
      id: 2,
      name: "WeeklyDo's",
      todos: [
        { id: 1, content: 'Finish Project' },
        { id: 2, content: 'Find New Project' },
        { id: 3, content: 'Start New Project' }
      ]
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Projects</h1>
        <Projects projects={this.state.projects} />
        <Todos currentProject={this.state.currentProject} />
      </div>
    );
  }
}

export default App;
