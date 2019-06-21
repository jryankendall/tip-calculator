import React, { Component } from 'react';
import Calculator from '../components/Calculator';

class TipCalculator extends Calculator {
    
}

class Main extends Component {

    render() {
        return(
            <div>
                <TipCalculator />
            </div>
        )
    }
}

export default Main;