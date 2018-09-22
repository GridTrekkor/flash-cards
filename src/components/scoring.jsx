import React, { Component } from 'react';

class Scoring extends Component {
  state = {};

  render () {

    if (this.props.attempts.length) {
      this.attempts = this.props.attempts.map((item, index) => 
        <tr key={index}>
          <td>
            {item.number1}
            {item.symbol}
            {item.number2}
            =
            {item.input}
          </td>
        </tr>
      );
    }

    return (
      <React.Fragment>
        <h2 className="p-5">Scoring</h2>
        <hr />
        <table>
          <tbody>
            {this.attempts}
          </tbody>
        </table>
      </React.Fragment>
    );

  }
}

export default Scoring;
