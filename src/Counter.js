// Counter with Class Components

// import React, { Component } from 'react';
// import './Counter.css';

// class Counter extends Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0,
//             calculation: 0
//         }
//         this.increment = this.increment.bind(this);
//         this.decrement = this.decrement.bind(this);
//         this.reset = this.reset.bind(this)
//     }

//     increment() {
//         this.setState(previousValue => ({
//             count: previousValue.count + 1,
//             calculation: previousValue.calculation + 1 * 2
//         }));
//     }

//     decrement() {
//         this.setState(previousValue => ({
//             count: previousValue.count - 1,
//             calculation: previousValue.calculation - 1 / 2

//         }));
//     }

//     reset() {
//         this.setState({
//             count: 0,
//             calculation: 0
//         });
//     }

//     render() {
//         return (
//             <div className="button-container">
//                 <h1>You clicked {this.state.count} times and got it {this.state.calculation}</h1>                
//                 <button className="addButton" onClick={this.increment}>+</button>
//                 <button className="subtractButton" onClick={this.decrement}>-</button>
//                 <button className="resetButton" onClick={this.reset}>Reset</button>
//             </div>
//         );
//     }
// }

// export default Counter;


// Counter with Hooks

import React, { useState, useEffect } from "react";
import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    const reset = () => {
        setCount(0);
    };

    useEffect(() => {
        setCalculation(() => count * 2); //Multiply my count
    }, [count]);
    return (
        <div>
            <h1>You clicked {count} times and got it {calculation}</h1>
            <div className="button-container">
                <button className="addButton" onClick={() => setCount(count + 1)}>
                    +
                </button>
                <button className="subtractButton" onClick={() => setCount(count - 1 )}>
                    -
                </button>
                <button className="resetButton" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
}
