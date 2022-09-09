import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this)
    }

    increment() {
        this.setState(previousValue => ({
            count: previousValue.count + 1,
        }));
    }

    decrement() {
        this.setState(previousValue => ({
            count: previousValue.count - 1,
        }));
    }

    reset() {
        this.setState({
            count: 0
        });
    }
    render() {
        return (
            <div className="button-container">
                <h1>Counter:{this.state.count}</h1>
                <button className="addButton" onClick={this.increment}>+</button>
                <button className="subtractButton" onClick={this.decrement}>-</button>
                <button className="resetButton" onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default Counter;


// export default function Counter() {
//   return (
//     <div>
//       <h1>Counter:{count}</h1>
//       <div className="button-container">
//         <button className="addButton" onClick={increase}>
//           +
//         </button>
//         <button className="subtractButton" onClick={decrease}>
//           -
//         </button>
//         <button className="resetButton" onClick={reset}>
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }
