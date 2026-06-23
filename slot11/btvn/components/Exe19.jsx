import { Col, Row } from 'react-bootstrap'
import animalData from '../data/data'
import AnimalCard from './AnimalCard'

export default function Exe19() {
    return (
        <Row>
            {animalData.map((animal, index) => (
                <Col key={index} xs={12} md={4}>
                    <AnimalCard {...animal}/>
                </Col>
            ))}
        </Row>
    )
}