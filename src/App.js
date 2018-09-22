import React, { Component } from 'react';
import Navbar from './components/navbar';
import Cards from './components/cards';
import './App.css';

class App extends Component {

  state = {
    number1: 0,
    number2: 0,
    operation: {
      type: 'Addition',
      symbol: '+'
    },
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
    this.setState({
      number1: this.getRandom(),
      number2: this.getRandom()
    });
  };

  render () {
    return (
      <React.Fragment>
        <Navbar />
        <Cards reset={this.setNumbers}
               number1={this.state.number1} 
               number2={this.state.number2}
               operation={this.state.operation} />
      </React.Fragment>
    );
  }
}

export default App;
