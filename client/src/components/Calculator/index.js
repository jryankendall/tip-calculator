import { Component } from 'react';

class Calculator extends Component {

    state = {
        options: {
            percent: { 
                preset: [5, 10, 15, 20, 0],
                selected: 2,
                value: 15,
                real: "15"
            },

        },
        bill: {
            base: "20.00",
            tip: "",
            total: ""
        }
    }

    //Misc Functions for Calculating
    mathematizeTip = (percent, bill) => {
        return parseFloat(bill * percent).toFixed(2);
    }

    //Functions for messing with states here
    calcTipClick = event => {
        const percentage = (parseFloat(this.state.options.percent.real) / 100);
        const billAmount = parseFloat(this.state.bill.base);

        const tipAmount = this.mathematizeTip(percentage, billAmount);

        this.setState(state => {
            return {
                bill: {
                    ...state.bill,
                    tip: parseFloat(tipAmount).toFixed(2),
                    total: (parseFloat(billAmount) + parseFloat(tipAmount)).toFixed(2)
                }
            }
        });
    }
}

export default Calculator;