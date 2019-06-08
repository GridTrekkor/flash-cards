import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light justify-content-start">
                <span className="navbar-brand mb-0 text-white">Flash Cards</span>
                <button type="button"
                    onClick={() => { this.props.onChangeOperation('Addition', '+') }}
                    style={{ backgroundColor: '#7E91EA' }}
                    className="btn btn-sm width-110 text-white ml-4">
                    Addition
                </button>
                <button type="button"
                    onClick={() => { this.props.onChangeOperation('Subtraction', '-') }}
                    style={{ backgroundColor: '#B73107' }}
                    className="btn btn-sm width-110 text-white ml-4">
                    Subtraction
                </button>
                <button type="button"
                    onClick={() => { this.props.onChangeOperation('Multiplication', '*') }}
                    style={{ backgroundColor: '#915A38' }}
                    className="btn btn-sm width-110 text-white ml-4">
                    Multiplication
                </button>
                <button type="button"
                    onClick={() => { this.props.onChangeOperation('Division', '÷') }}
                    style={{ backgroundColor: '#389168' }}
                    className="btn btn-sm width-110 text-white ml-4">
                    Division
                </button>
                <form className="form-inline ml-4"
                    onSubmit={this.props.onSubmit}>
                    <label htmlFor="max" className="text-white text-14">Max Operand</label>
                    <div className="form-group ml-2">
                        <input className="form-control width-110 height-30"
                            type="number"
                            name="max"
                            id="max"
                            onChange={this.props.onChange}
                            value={this.props.max.toString()} />
                    </div>
                </form>
            </nav>
        );
    }
}

export default Navbar;
