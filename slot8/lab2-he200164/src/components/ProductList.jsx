import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ productsData, onAddToCart }) => {
    return (
        <Container className="py-5" id="products">
            <div className="text-center mb-5">
                <h2 className="fw-bolder display-6">Trending Now</h2>
                <p className="text-muted">Discover our hand-picked selection of premium clothing</p>
            </div>
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