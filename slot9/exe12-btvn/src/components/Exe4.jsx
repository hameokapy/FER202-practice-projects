import { useState } from "react";
import { Button, Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";

export default function Exe4() {
    const [todoList, setTodoList] = useState([]);
    const [task, setTask] = useState('');

    const handleDelete = (itemIndexed) => {
        setTodoList(prevList => prevList.filter((_, index) => index !== itemIndexed));
    }

    return (
        <Container>
            <h1>Exercise 4: </h1>
            <Row>
                <Col xs={5}>
                    <Form.Control placeholder="Please input a Task" value={task} onChange={(e) => setTask(e.target.value)}/>
                </Col>
                <Col xs={3}>
                    <Button variant="danger" color="white" className="px-5" onClick={() => {
                        setTodoList(prevList => [...prevList, task]);
                        setTask("");
                    }}>Add Todo</Button>
                </Col>
                <Col xs={4}>
                    <Card bg="white">
                        <Card.Header className="fw-bold text-center">Todo List</Card.Header>
                        <Card.Body>
                        <ListGroup>
                            {todoList.map((item, index) => (
                                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                                <span>{item}</span>
                                <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
                            </ListGroup.Item>
                            ))}
                        </ListGroup>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}