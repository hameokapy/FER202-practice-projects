import { useState } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";

export default function Exe2() {
    const [valueTyped, setValueTyped] = useState("");

    return (
        <Container>
            <h1>Exercise 2: </h1>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Input</InputGroup.Text>
                <Form.Control placeholder="Type anything here..." value={valueTyped} onChange={(e) => setValueTyped(e.target.value)} />
            </InputGroup>
            <div>Input text: {valueTyped}</div>
        </Container>
    )
}