import { useEffect } from 'react'
import { useState } from 'react'
import {Container} from 'react-bootstrap'

export default function Exe3() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <Container className='text-center'>
            <h1>Exercise 3</h1>
            <p>Window size: {windowSize.width} x {windowSize.height}</p>
        </Container>
    )
}