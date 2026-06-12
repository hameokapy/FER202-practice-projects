import { useState } from "react";
import { Button, Container } from "react-bootstrap";

export default function Exe3() {
    const [toggle, setToggle] = useState(false);


    return (
        <Container>
            <h1>Exercise 3: </h1>
            <Button onClick={() => setToggle(!toggle)}>{!toggle ? 'Show' : 'Hide'}</Button>
            {toggle && <p>Toggle me!</p>}
        </Container>
    )
}