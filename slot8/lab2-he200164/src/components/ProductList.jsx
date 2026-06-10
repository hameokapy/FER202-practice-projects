import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ productsData, onAddToCart }) => {
    return (
        <Container className="mb-5" id="products">
            <h2 className="text-center mb-4 fw-bold">Our Products</h2>
            <Row className="g-4">
                {productsData.map((product) => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={4}>
                        <ProductCard 
                            product={product} 
                            onAddToCart={onAddToCart} 
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductList;