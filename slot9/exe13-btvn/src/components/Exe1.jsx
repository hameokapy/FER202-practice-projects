import { useEffect } from 'react';
import { useState } from 'react'
import {Container, Form, Card, Row, Col} from 'react-bootstrap'

export default function Exe1() {
    const [userId, setUserId] = useState(1);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            setPosts(await response.json());
        }; 
        fetchData();
    }, [userId]);

    return (
        <Container className='text-center'>
            <h1>Exercise 1: </h1>
            <Row className='py-2'>
                <Col xs={4} className='align-self-center'>Enter UserID here:</Col>
                <Col xs={8}><Form.Control value={userId} onChange={(e) => setUserId(e.target.value)}></Form.Control></Col>
            </Row>
            <div>
                {posts.map(post => (
                    <Card className='my-2'>
                        <Card.Title key={post.id}>{post.title}</Card.Title>
                        <Card.Text>{post.body}</Card.Text>
                    </Card>
                ))}
            </div>
        </Container>
    )
}