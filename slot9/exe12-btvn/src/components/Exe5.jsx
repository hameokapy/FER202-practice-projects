import { useState } from "react"
import { Container, Form } from "react-bootstrap";

export default function Exe5() {
    const [color, setColor] = useState("black");
    
    return (
        <Container>
            <h1>Exercise 5: </h1>
            <Form.Select value={color} onChange={(e) => setColor(e.target.value)}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
            </Form.Select>
            <div style={{width:"100%", height:"100px", backgroundColor:`${color}`}}></div>
        </Container>
    )
}