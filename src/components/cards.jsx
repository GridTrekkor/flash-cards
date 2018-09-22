import React, { Component } from 'react';

class Cards extends Component {

  render () {

    const { number1, number2 } = this.props;
    const { type, symbol } = this.props.operation;

    return (
      <div className="p-5">
        <h2>{type}</h2>
        <hr />
        <div className="row">
          <div className="col-sm-9 number">
            <div className="row">
              <div className="col-sm-6"></div>
              <div className="col-sm-6">
              <span className="float-right">{number1}</span>
              </div>
            </div>
            <div className="row" style={{ borderBottom: '2px solid #000' }}>
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
                         className="form-control float-right" 
                         value={this.props.input.toString()}
                         onChange={this.props.onUpdateInput}
                         onKeyUp={this.props.onAttempt}/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    );

  }

}

export default Cards;
