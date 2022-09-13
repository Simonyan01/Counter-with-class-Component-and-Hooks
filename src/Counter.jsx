// Counter with Class Components

import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            calculation: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this)
    }

    increment() {
        this.setState(previousValue => ({
            count: previousValue.count + 1,
            calculation: previousValue.calculation + 1 * 2
        }));
    }

    decrement() {
        this.setState(previousValue => ({
            count: previousValue.count - 1,
            calculation: previousValue.calculation / 2

        }));
    }

    reset() {
        this.setState({
            count: 0,
            calculation: 0
        });
    }

    render() {
        return (
            <div>
                <h1 className='h1'>You clicked {this.state.count} times and got it {this.state.calculation}</h1>
                <div className="button-container">
                    <button className="addButton" onClick={this.increment}><span className="text">Increment</span> <span>+</span></button>
                    <button className="subtractButton" onClick={this.decrement}><span className="text">Decrement</span> <span>_</span></button>
                    <button className="resetButton" onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Counter;


// Counter with Hooks

// import React, { useState, useEffect } from "react";
// import './Counter.css'

// export default function Counter() {
//     const [count, setCount] = useState(0);
//     const [calculation, setCalculation] = useState(0);

//     const reset = () => {
//         setCount(0);
//     };

//     useEffect(() => {
//         setCalculation(() => count * 2); //Multiplied by count
//     }, [count]);
//     return (
//         <div>
//             <h1 className="h1">You clicked {count} times and got it {calculation}</h1>
//             <div className="button-container">
//                 <button className="addButton" onClick={() => setCount(count + 1)}>
//                     <span className="text">Increment</span> <span>+</span>
//                 </button>
//                 <button className="subtractButton" onClick={() => setCount(count - 1)}>
//                     <span className="text">Decrement</span> <span>_</span>
//                 </button>
//                 <button className="resetButton" onClick={reset}>
//                     Reset
//                 </button>
//             </div>
//         </div>

//     );
// }
