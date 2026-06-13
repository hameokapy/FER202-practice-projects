import { useState } from 'react'
import {Container, Row, Col, Button, Form, Card, ListGroup} from 'react-bootstrap'

export default function TodoList() {
    const [task, setTask] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleDeleteTask = (item) => {
        const isConfirmed = window.confirm("Are you sure to delete this task?");
        if(isConfirmed) {
            setTodoList(prevList => prevList.filter((listItem) => listItem !== item));
        }
    }
    
    const handleAddTask = () => {
        setTodoList(prevList => [...prevList, task]);
        setTask("");
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            handleAddTask();
        }
    }

    return (
        <Container>
            <h1>Todos</h1>
            <Row>
                <Col xs={5}>
                    <Form.Control value={task} onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => setTask(e.target.value)} ></Form.Control>
                </Col>
                <Col xs={2}>
                    <Button 
                        variant='danger'
                        onClick={handleAddTask}
                    >Add task</Button>
                </Col>
                <Col xs={5}>
                    <Card>
                        <Card.Header>Todo List</Card.Header>
                        <Card.Body>
                            <ListGroup>
                                {todoList.map((item, index) => (
                                    <ListGroup.Item key={index} className='d-flex gap-2 align-items-center justify-content-between'>
                                        <span>{item}</span>
                                        <Button variant='danger' onClick={() => handleDeleteTask(item)}>Delete</Button>
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