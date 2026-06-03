import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(prev => prev+1)}>Increment</button>
            <button onClick={() => setCount(prev => prev-1)}>Decrement</button>
        </div>
    )
}

export default Counter;