import React from 'react';
import './App.css';
import Title from './Components/Title'
import About from './Components/About'
import Projects from './Components/Projects'

function App() {
  return (
    <div className="App">
      <Title/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
