import React, { Component } from 'react';
import Navbar from './components/navbar';
import Cards from './components/cards';
import './App.css';

class App extends Component {

  state = {
    number1: 0,
    number2: 0,
    input: 0
  };

  constructor () {
    super();
    this.state.number1 = this.getRandom();
    this.state.number2 = this.getRandom();
  }

  getRandom = () => {
    return Math.floor((Math.random() * 9) + 0);
  };

  setNumbers = () => {

  };

  render () {
    return (
      <React.Fragment>
        <Navbar />
        <Cards number1={this.state.number1} number2={this.state.number2}/>
      </React.Fragment>
    );
  }
}

export default App;
