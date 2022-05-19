import Turtle from './images/testudao.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-Header">
      <div className="Main-Block flex flex-col">
        <div className="Header flex">
          <img className="Logo" src={Turtle}/>
          Testudo Ventures
        </div>
        <h2 className="Main-Text">
          Dumb as Ape. Slow as Turtle.
        </h2>
        <p className="Body-Text-1">
          What follows is the beginning of the greatest financial, technical, and spiritual collaboration this world has ever known.
        </p>
        <p className="Body-Text-2">
          We may be on our back, but make no mistake... we will roll over.
        </p>
        <div className="Foot"/>
        </div>
      </header>

    </div>
  );
}

export default App;
