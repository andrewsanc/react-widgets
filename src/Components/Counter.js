import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count + 1);
    }

    const resetCounter = () => {
        setCount(0);
    }

    return (
        <React.Fragment>
            <h1>Current Count: {count}</h1>
            <button class='ui primary button' onClick={() => incrementCounter()}>Click Me</button>
            <button class='ui red button' onClick={() => resetCounter()}>Reset</button>
        </React.Fragment>
    )
}

export default Counter;