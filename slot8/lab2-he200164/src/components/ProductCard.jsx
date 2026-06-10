import { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const ProductCard = ({ product, onAddToCart }) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        setIsAdded(true);
        onAddToCart();
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <Card className="h-100 shadow-sm border-0">
            <Card.Img 
                variant="top" 
                src={product.imageLink} 
                style={{ height: '350px', objectFit: 'cover' }} 
            />
            <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title className="mb-0">{product.name}</Card.Title>
                    <Badge bg="info" text="dark">{product.status}</Badge>
                </div>
                <Card.Text className="fw-bold text-danger fs-5">
                    {product.price.toLocaleString('vi-VN')} VND
                </Card.Text>
                
                <Button 
                    variant={isAdded ? "secondary" : "success"} 
                    className="mt-auto w-100 fw-bold"
                    onClick={handleAddToCart}
                    disabled={isAdded}
                >
                    {isAdded ? "✓ Added to cart" : "Add to cart"}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;