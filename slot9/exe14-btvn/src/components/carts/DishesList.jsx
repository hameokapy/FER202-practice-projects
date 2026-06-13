import { useCart } from "../../contexts/CartContext"
import { dishes } from "../../data/dishes";
import {Card, Button} from 'react-bootstrap'

export default function DishesList() {
    const {addToCart} = useCart();
    
    return (
        <div className="p-3">
            {dishes.map(dish => (
                <Card key={dish.id}>
                    <Card.Title>{dish.name}</Card.Title>
                    <Card.Body>
                        <p>Price: {dish.price}</p>
                        <Button onClick={() => addToCart(dish)}>Add to cart</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}