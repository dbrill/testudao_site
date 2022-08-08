import Turtle from './images/testudao.svg';
import React from 'react';
import HeaderNavigation from './components/HeaderNavigation';
import About from './components/About';
import Investments from './components/Investments';
import tabs from "./util/enums";
import './App.css';

type Props = {};

class App extends React.Component<{}, {selected: tabs}> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selected: tabs.ABOUT
    }
  }

  changeTab = (newTab: tabs) => {
    this.setState({
      selected: newTab
    });
  };

   body = () => {
     if (this.state.selected === tabs.ABOUT) {
    return (
      <About/>
    )
     } else {
       return (
         <Investments/>
       )
     }
  }

  render() {return (
    <div className="App">
      <header className="App-Header">
        <div className="Main-Block flex flex-col">
          <div className="Header flex">
            <div className="Header-Branding">
              <img className="Logo" src={Turtle} alt="Testudo Ventures Logo" />
              Testudo Ventures
            </div>
            <HeaderNavigation changeTab={this.changeTab}/>
          </div>
          {this.body()}
          <div className="Foot" />
        </div>
      </header>

    </div>
  );
  }
}

export default App;
