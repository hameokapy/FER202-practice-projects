import { useState } from 'react'
import { Button, Container } from 'react-bootstrap'

export default function Exe1() {
    const [count, setCount] = useState(0);

    return (
        <Container>  
            <h1>Exercise 1: </h1>
            <div>
                <Button onClick={() => setCount(prev => prev+1)}>Increment</Button>
                <div>Count: {count}</div>
            </div>
        </Container>
    )
}