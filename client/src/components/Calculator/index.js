import React, { Component } from 'react';

class Calculator extends Component {

    state = {
        options: {
            percent: { 
                preset: [5, 10, 15, 20, 0],
                selected: 2,
                value: 15,
                real: ""
            },

        },
        bill: {
            base: "20.00",
            tip: "",
            total: ""
        }
    }

    render() {
        return(
            <div className="calculator-body">
            </div>
        )
    }
}

export default Calculator;