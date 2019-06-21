import React from 'react';
import Calculator from '../components/Calculator';

class Main extends Calculator {

    inputChanged = event => {
        let value = event.target.value;
        const input = event.target.id;

        switch (input) {
            case "base-bill-input":
                this.setState({
                    bill: {
                        base: value
                    }
                });
                break;
            case "tip-integer-input":
                this.setState( {
                    options: {
                        percent: {
                            real: value
                        }
                    }
                });
                break;
            default:
                return null;
        }
    }

    render() {
        return(
            <div>
                <div className="top-display">
                    <p>Starting Bill</p>
                    <input id="base-bill-input" value={this.state.bill.base} onChange={this.inputChanged}></input>
                    <p>Tip Percentage</p>
                    <input id="tip-integer-input" value={this.state.options.percent.real} onChange={this.inputChanged}></input>
                    <br></br>
                    <button onClick={this.calcTipClick}>Calculate Tip and Total</button>
                </div>
                <hr></hr>
                <div className="bottom-display">
                    <p>Tip Amount</p>
                    <p id="tip-amount-display">{this.state.bill.tip}</p>
                    <p>Total Bill</p>
                    <p id="total-bill-display">{this.state.bill.total}</p>
                </div>
            </div>
        )
    }
}

export default Main;