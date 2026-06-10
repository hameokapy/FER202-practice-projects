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
        <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden" style={{ transition: "transform 0.2s" }}>
            <div className="position-relative">
                <Card.Img 
                    variant="top" 
                    src={product.imageLink} 
                    style={{ height: '400px', objectFit: 'cover' }} 
                />
                <Badge 
                    bg="dark" 
                    className="position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill shadow-sm"
                >
                    {product.status}
                </Badge>
            </div>
            
            <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="fw-bold mb-1 fs-5 text-truncate">
                    {product.name}
                </Card.Title>
                <Card.Text className="text-muted mb-4">
                    Casual Wear
                </Card.Text>
                
                <div className="mt-auto d-flex flex-column gap-3">
                    <span className="fw-bolder fs-4 text-primary">
                        {product.price.toLocaleString('vi-VN')} ₫
                    </span>
                    <Button 
                        variant={isAdded ? "secondary" : "dark"} 
                        className="w-100 fw-bold py-2 rounded-pill"
                        onClick={handleAddToCart}
                        disabled={isAdded}
                    >
                        {isAdded ? "✓ Added to Cart" : "Add to Cart"}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;