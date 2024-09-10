import React, { useState } from "react"


function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
      
    }

    function decrement() {
        setCount(count - 1);
        
    }

    function print() {
        console.log(count);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={ increment }>Increment</button>
            <button onClick={ decrement }>Decrement</button>
            <button onClick={ print }>Print</button>

        </div>
    );
}

export default Counter;