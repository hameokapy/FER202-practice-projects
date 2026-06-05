import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const BookingSection = () => {
    return (
        <Container className='mb-4'>
            <h2 className='text-center mb-4 text-light'>Book Your Table</h2>
            <Row className='mb-4'>
                <Col>
                    <Form.Control type='text' placeholder='Your Name *'/>
                </Col>
                <Col>
                    <Form.Control type='email' placeholder='Your Email *'/>
                </Col>
                <Col>
                    <Form.Select>
                        <option>Select a service</option>
                        <option>Dine in</option>
                        <option>Delivery</option>
                    </Form.Select>
                </Col>
            </Row>
            <Form.Group className='mb-4'>
                <Form.Control as='textarea' rows={6} placeholder='Please write your comment'/>
            </Form.Group>
            <Button variant='warning' className='text-white'>Send Message</Button>
        </Container>
    )
}

export default BookingSection;