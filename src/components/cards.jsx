import React, { Component } from 'react';

class Cards extends Component {

  render () {

    const { number1, number2 } = this.props;
    const { type, symbol } = this.props.operation;
    const hasError = {
      color: '#F00 !imporant',
      backgroundColor: '#E8BBBB'
    };

    return (
      <div className="pt-4 px-3">
        <div className="card">
          <h2 className="title">{type}</h2>
          <hr />
          <div className="row">
            <div className="col-sm-9 number">
              <div className="row">
                <div className="col-sm-6"></div>
                <div className="col-sm-6">
                  <span className="float-right">{number1}</span>
                </div>
              </div>
              <div className="row"
                style={{ borderBottom: '2px solid #000', marginLeft: '25px' }}>
                <div className="col-sm-6">
                  <span className="float-right">{symbol}</span>
                </div>
                <div className="col-sm-6">
                  <span className="float-right">{number2}</span>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-12">
                  <div className="form-group">
                    <input autoFocus
                      style={this.props.isCorrect ? null : hasError}
                      className="attempt form-control float-right"
                      value={this.props.input.toString()}
                      onChange={this.props.onChange}
                      onKeyUp={this.props.onAttempt} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
      </div>
    );

  }

}

export default Cards;
