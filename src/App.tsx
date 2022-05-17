import React from 'react';
import {ReactComponent as Turtle} from './images/turtle.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Turtle className="turtle"/>
        <p>
          Greatness in progress
        </p>
      </header>
    </div>
  );
}

export default App;
