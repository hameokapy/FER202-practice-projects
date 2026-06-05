import {Col, Container, Row} from 'react-bootstrap'
import { pizzas } from '../data/pizzas'
import PizzaCard from './PizzaCard'

export default function Menu() {
    return (
        <Container className='py-5'>
            <h2 className='text-light'>Our Menu</h2>
            <Row>
                {pizzas.map(item => (
                    <Col key={item.id}>
                        <PizzaCard card={item}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}