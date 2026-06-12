import { useEffect } from 'react';
import { useState } from 'react'
import { Container, Button } from 'react-bootstrap'

export default function Exe2() {
    const [timeRemaining, setTimeRemaining] = useState(15);
    
    // C1:
    // useEffect(() => {
    //     if(timeRemaining > 0) {
    //         const timerId = setTimeout(() => {
    //             setTimeRemaining(timeRemaining - 1)
    //         }, 1000)

    //         return () => clearTimeout(timerId)
    //     };
    // }, [timeRemaining]);

    // C2:
    useEffect(() => {
        if (timeRemaining <= 0) {
            return;
        }

        const timerId = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeRemaining]);

    return (
        <Container className='text-center'>
            <h1>Exercise 2: </h1>
            <div className='py-4 text-danger'>Time Remaining: {timeRemaining}</div>
            <Button variant='danger' onClick={() => setTimeRemaining(20)}>Reset Timer</Button>
        </Container>
    )
}