import React, { Component } from 'react';

class Scoring extends Component {

  getCorrect = isCorrect => {
    return isCorrect ? String.fromCharCode(10004) : String.fromCharCode(10006);
  };

  render () {

    if (this.props.attempts.length) {
      this.attempts = this.props.attempts.map((item, index) => 
        <tr key={index} className={item.isCorrect ? 'alert-success' : 'alert-danger'}>
          <td>
            {item.number1}&nbsp;
            {item.symbol}&nbsp;
            {item.number2}&nbsp;           
            =&nbsp;
            {item.input}
          </td>
          <td>{this.getCorrect(item.isCorrect)}</td>
          <td>{item.elapsedTime.toFixed(1)}</td>
        </tr>
      );
    }

    return (
      <div className="pt-4 px-2">
        <div className="card">
          <h2 className="title">Scoring</h2>
          <hr/>
          <div className="row">
            <div className="col-sm-12">
              <table className="table table-bordered mb-0">
                <thead>
                  <tr>
                    <th>Math</th>
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
      </div>
    );

  }

}

export default Scoring;
