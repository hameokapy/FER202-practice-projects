import { useState } from "react";

const Exe16 = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => setCount(count+1);

    return (
        <div>
            <h1>Exe16: Event Handling Demo</h1>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default Exe16;