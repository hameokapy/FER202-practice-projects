import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ cartCount }) => {
    return (
        <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold">SHOP Fashion</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#products">Products</Nav.Link>
                        <Nav.Link href="#men">Men</Nav.Link>
                        <Nav.Link href="#women">Women</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#cart" className="d-flex align-items-center">
                            <FaShoppingCart size={20} className="me-2" />
                            <span>Cart </span>
                            <Badge bg="danger" className="ms-1" pill>
                                {cartCount}
                            </Badge>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;