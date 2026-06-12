import { useEffect } from 'react';
import { useState } from 'react'
import {Container} from 'react-bootstrap'

export default function Exe4() {
    const [value, setValue] = useState('')
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const validationFunction = () => {
            if(value.includes("hehe")) {
                setIsValid(false);
                setErrorMessage("Input must not contain 'hehe'.");
            } else {
                setIsValid(true);
                setErrorMessage("")
            }
        };
        validationFunction();
    }, [value]);

    return (
        <Container className='text-center'>
            <h1>Exercise 4</h1>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {!isValid && <p className="text-danger">{errorMessage}</p>}
        </Container>
    )
}