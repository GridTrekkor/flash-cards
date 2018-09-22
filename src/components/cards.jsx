import React, { Component } from 'react';

class Cards extends Component {

    render () { 

        const { number1, number2 } = this.props;
        const { type, symbol } = this.props.operation;

        return (
            <div className="p-5">
                <h2>{type}</h2>
                <hr/>
                <div className="row">
                    <div className="col-sm-3 number">
                        <div className="row">
                            <div className="col-sm-6"></div>
                            <div className="col-sm-6">{number1}</div>
                        </div>
                        <div className="row" style={{borderBottom: '2px solid #333'}}>
                            <div className="col-sm-6">
                                <span className="float-right">{symbol}</span>
                            </div>
                            <div className="col-sm-6">{number2}</div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-sm-6"></div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input autoFocus className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Cards;
