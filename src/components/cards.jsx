import React, { Component } from 'react';

class Cards extends Component {
    render () { 
        const { number1, number2 } = this.props;
        return (
            <div className="p-2">
                <h1>Cards</h1>
                First: {number1}
                Second: {number2}
            </div>
        );
    }
}
 
export default Cards;
