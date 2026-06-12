import { Navbar, Nav, Container, Badge, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ cartCount, cartData }) => {
    return (
        <Navbar bg="white" expand="lg" sticky="top" className="border-bottom py-3">
            <Container>
                <Navbar.Brand href="#home" className="fw-bolder fs-4 text-uppercase tracking-wide">
                    <span className="text-primary">SHOP</span> Fashion
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto fw-medium">
                        <Nav.Link href="#home" className="px-3 text-dark">Home</Nav.Link>
                        <Nav.Link href="#products" className="px-3 text-dark">Products</Nav.Link>
                        <Nav.Link href="#men" className="px-3 text-dark">Men</Nav.Link>
                        <Nav.Link href="#women" className="px-3 text-dark">Women</Nav.Link>
                        <Nav.Link href="#contact" className="px-3 text-dark">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="dark" className="d-flex align-items-center rounded-pill px-4 py-2">
                            <FaShoppingCart size={18} className="me-2" />
                            <span className="fw-semibold">Cart</span>
                            <Badge bg="danger" className="ms-2 rounded-circle px-2 py-1">
                                {cartCount}: {cartData.reduce((total, item) => total + item.price, 0).toLocaleString('vi-VN')} đ
                            </Badge>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;