import React, { Component } from 'react';
import Navbar from './components/navbar';
import Cards from './components/cards';
import Scoring from './components/scoring';
import './App.css';

class App extends Component {

  state = {
    number1: 0,
    number2: 0,
    input: '',
    operation: {
      type: 'Addition',
      symbol: '+'
    },
    attempts: [],
    isCorrect: true,
    elapsedTime: 0
  };

  constructor () {
    super();
    this.state.number1 = this.getRandom();
    this.state.number2 = this.getRandom();
    this.startTime = new Date();
    this.handleAttempt = this.handleAttempt.bind(this);
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

  checkAttempt = (number1, number2, input, elapsedTime) => {
    const operation = this.state.operation.type;
    let isCorrect = false;
    if (operation === 'Addition') {
      isCorrect = number1 + number2 === input;
    }
    let thisAttempt = {
      id: this.state.id,
      number1: number1,
      number2: number2,
      input: input,
      isCorrect: isCorrect,
      symbol: this.state.operation.symbol,
      elapsedTime: elapsedTime
    };
    this.setState({ id: this.state.id + 1, attempts: [...this.state.attempts, thisAttempt] });
    return isCorrect;
  };

  handleAttempt = event => {
    if (event.key === 'Enter') {
      let elapsedTime = (new Date() - this.startTime) / 1000;
      const { number1, number2, input } = this.state;
      const isCorrect = this.checkAttempt(number1, number2, input, elapsedTime)
      if (isCorrect) {
        this.resetParams();
      }
      this.startTime = new Date();
      this.setState({ isCorrect: isCorrect, elapsedTime: this.elapsedTime});
    }
  };

  resetParams = () => {
    this.setState({ number1: this.getRandom(), number2: this.getRandom(), input: '' });
  };

  handleUpdateInput = event => {
    this.setState({ input: parseInt(event.target.value) });
  };

  render () {
    return (
      <React.Fragment>
        <Navbar />
        <div className="row">
          <div className="col-sm-6">
            <Cards onAttempt={this.handleAttempt}
                   onUpdateInput={this.handleUpdateInput}
                   number1={this.state.number1} 
                   number2={this.state.number2}
                   input={this.state.input}
                   isCorrect={this.state.isCorrect}
                   operation={this.state.operation} />
          </div>
          <div className="col-sm-6">
            <Scoring attempts={this.state.attempts} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
