import React, { Component } from 'react';
import Navbar from './components/navbar';
import Cards from './components/cards';
// import Scoring from './components/scoring';
import './App.css';

class App extends Component {

  state = {
    attempts: [],
    elapsedTime: 0,
    input: '',
    isCorrect: true,
    max: 12,
    number1: 0,
    number2: 0,
    operation: {
        type: 'Addition',
        symbol: '+'
      }
  };

  constructor () {
    super();
    this.state.number1 = this.getRandom();
    this.state.number2 = this.getRandom();
    this.startTime = new Date();
    this.handleAttempt = this.handleAttempt.bind(this); // required so handleAttempt has access to 'this'
  }

  getRandom = () => {
    return Math.floor(Math.random() * (this.state.max + 1));
  };

  // setNumbers = () => {
  //   this.setState({
  //     number1: this.getRandom(),
  //     number2: this.getRandom()
  //   });
  // };

  checkAttempt = (number1, number2, input, elapsedTime) => {
    const operation = this.state.operation.type;
    let isCorrect = false;

    if (operation === 'Addition') {
      isCorrect = number1 + number2 === input;
    } else if (operation === 'Subtraction') {
      isCorrect = number1 - number2 === input;
    } else if (operation === 'Multiplication') {
      isCorrect = number1 * number2 === input;
    } else if (operation === 'Division') {
      isCorrect = number1 / number2 === input;
    }

    let thisAttempt = {
      number1: number1,
      number2: number2,
      input: input,
      isCorrect: isCorrect,
      symbol: this.state.operation.symbol,
      elapsedTime: elapsedTime
    };
    const attempts = this.state.attempts;
    attempts.push(thisAttempt);
    this.setState({ attempts: attempts });
    return isCorrect;
  };

  handleAttempt = event => {
    if (event.key !== 'Enter') {
      return;
    }
    let elapsedTime = (new Date() - this.startTime) / 1000;
    const { number1, number2 } = this.state;
    const input = parseInt(event.target.value, 10);
    const isCorrect = this.checkAttempt(number1, number2, input, elapsedTime);
    if (isCorrect) {
      this.resetParams();
    } else {
      this.setState({ input: '' });
    }
    this.startTime = new Date();
    this.setState({ isCorrect: isCorrect, elapsedTime: this.elapsedTime});
  };

  handleUpdateInput = event => {
    const val = parseInt(event.target.value, 10);
    if (!isNaN(val)) {
      this.setState({ input: val });
    } else {
      this.setState({ input: event.target.value });
    }
  };

  resetParams = () => {
    const operation = this.state.operation.type;
    let number1 = this.getRandom();
    let number2 = this.getRandom();
    if (operation === 'Division') {
      number1 = number1 * number2;
    }
    this.setState({ number1: number1, number2: number2, input: '' }, () => {
      if (operation === 'Subtraction' && number1 - number2 < 0) {
        this.resetParams();
      }
      if (operation === 'Division' && (number1 < number2 || number1 % number2 !== 0)) {
        this.resetParams();
      }
    });
  };

  handleOperationChange = (type, symbol) => {
    if (symbol === '-') {
      symbol = String.fromCharCode(8211)
    }
    if (symbol === '*') {
      symbol = String.fromCharCode(10005);
    }
    if (symbol === '÷') {
      this.setState({ max: 9 });
    }
    this.setState({ operation: { type: type, symbol: symbol } }, () => {
        this.resetParams();
    });
  };

  handleMaxChange  = event => {
    this.setState({ max: parseInt(event.target.value, 10) });
  };

  handleMaxSubmit = event => {
    this.resetParams();
    event.preventDefault();
  };

  render () {
    return (
      <React.Fragment>
        <Navbar max={this.state.max}
                onChangeOperation={this.handleOperationChange}
                onChange={this.handleMaxChange}
                onSubmit={this.handleMaxSubmit} />
        <div className="row mt-3 ml-3">
          <div className="col-sm-6" style={{ maxWidth: '350px' }}>
            <Cards onAttempt={this.handleAttempt}
                   onChange={this.handleUpdateInput}
                   number1={this.state.number1} 
                   number2={this.state.number2}
                   input={this.state.input}
                   max={this.state.max}
                   isCorrect={this.state.isCorrect}
                   operation={this.state.operation} />
          </div>
          {/* <div className="col-sm-6" style={{ maxWidth: '500px' }}>
            <Scoring attempts={this.state.attempts} />
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
