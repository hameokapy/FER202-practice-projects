import { Badge, Button, Card } from 'react-bootstrap'

const PizzaCard = ({card}) => {
    return (
        <Card>
            {card.onSale && <Badge bg='warning' text='dark' className='position-absolute rounded-0 px-3'>
                SALE    
            </Badge>}
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>
                    {card.onSale ? 
                        (<>
                            <span className='text-decoration-line-through'>${card.oldPrice}</span> {' '}
                            <span className='text-warning'>${card.salePrice}</span>
                        </>) : (
                            <span>{card.oldPrice}</span>) }
                </Card.Text>
                <Button variant='dark' className='w-100'>Buy</Button>
            </Card.Body>
        </Card>
    )
}

export default PizzaCard;