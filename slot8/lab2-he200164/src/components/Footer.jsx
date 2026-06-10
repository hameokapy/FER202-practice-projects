import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5 mt-auto">
            <Container>
                <Row className="gy-4">
                    <Col md={6}>
                        <h4 className="fw-bold mb-3">SHOP Fashion</h4>
                        <p className="text-secondary pe-md-5">
                            Providing the best quality clothing and accessories. We blend modern style with ultimate comfort for everyday wear.
                        </p>
                    </Col>
                    <Col md={6}>
                        <h5 className="fw-bold mb-3 text-uppercase">Student Developer</h5>
                        <ul className="list-unstyled text-secondary">
                            <li className="mb-2"><strong>Name:</strong> Le Thu Ha</li>
                            <li className="mb-2"><strong>ID:</strong> HE200164</li>
                            <li className="mb-2"><strong>Class:</strong> SE2009</li>
                            <li className="mb-2"><strong>Email:</strong> hameo.kapy@gmail.com</li>
                        </ul>
                    </Col>
                </Row>
                <hr className="border-secondary mt-4 mb-3" />
                <div className="text-center text-secondary small">
                    &copy; {new Date().getFullYear()} SHOP Fashion. All rights reserved.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;