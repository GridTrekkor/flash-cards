import React, { Component } from 'react';

class Scoring extends Component {
  state = {};

  getCorrect = isCorrect => {
    return isCorrect ? String.fromCharCode(10004) : String.fromCharCode(10006);
  }

  render () {

    const green = { color: 'green !important' };
    const red = { color: 'red !important' };
  
    if (this.props.attempts.length) {
      this.attempts = this.props.attempts.map((item, index) => 
        <tr key={index}>
          <td>
            {item.number1}&nbsp;
            {item.symbol}&nbsp;
            {item.number2}&nbsp;           
            =&nbsp;
            {item.input}
          </td>
          <td>
            <span style={item.isCorrect ? green : red}>
              {this.getCorrect(item.isCorrect)}
            </span>
          </td>
        </tr>
      );
    }

    return (
      <div className="p-5">
        <h2>Scoring</h2>
        <hr />
        <div className="row">
          <div className="col-sm-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Math Problem</th>
                  <th>Correct?</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {this.attempts}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );

  }
}

export default Scoring;
