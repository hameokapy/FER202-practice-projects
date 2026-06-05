import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href="#home">Pizza Store</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About Us</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Form className='d-flex'>
                    <Form.Control placeholder='Search' className='me-1'/>
                    <Button variant='danger'>
                        <i class="bi bi-search"></i>
                    </Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default Header;