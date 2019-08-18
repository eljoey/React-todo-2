import React, { Component } from 'react';
import './App.css';
import Projects from './components/Projects';
import Todos from './components/Todos';
import { ProjectProvider } from './components/ProjectContext';

class App extends Component {
  render() {
    return (
      <ProjectProvider>
        <div className="App">
          <Projects />
          <Todos />
        </div>
      </ProjectProvider>
    );
  }
}

export default App;
