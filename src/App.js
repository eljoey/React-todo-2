import React, { Component } from 'react';
import './App.css';
import Projects from './Projects';
import Todos from './Todos';
import { ProjectProvider } from './ProjectContext';

class App extends Component {
  render() {
    return (
      <ProjectProvider>
        <div className="App">
          <h1>Projects</h1>
          <Projects />
          <Todos />
        </div>
      </ProjectProvider>
    );
  }
}

export default App;
