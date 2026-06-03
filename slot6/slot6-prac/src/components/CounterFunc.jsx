import { useEffect, useState } from "react";

const CounterFunc = () => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log('func Component mounted');
        return () => {
            console.log('func Component will unmount');
        }
    } , []);

    useEffect(() => {

        console.log("func component updated");
    }
    , [count]);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(prev => prev-1)}>Decrement</button>
            <button onClick={() => setCount(prev => prev+1)}>Increment</button>
        </div>
    )
}

export default CounterFunc;