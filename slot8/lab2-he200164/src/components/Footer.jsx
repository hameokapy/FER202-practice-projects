import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5 mt-auto">
            <Container>
                <Row>
                        <h4 className="fw-bold">SHOP Fashion</h4>
                        <p className="text-secondary">
                            Providing the best quality clothing and accessories. We blend modern style with ultimate comfort for everyday wear.
                        </p>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h5 className="fw-bold mb-3 text-uppercase">Student Developer</h5>
                        <Row>
                            <Col>
                            <span className="mb-2"><strong>Name:</strong> Le Thu Ha</span>
                            </Col>
                            <Col>
                            <span className="mb-2"><strong>ID:</strong> HE200164</span>
                            </Col>
                            <Col>
                            <span className="mb-2"><strong>Class:</strong> SE2009</span>
                            </Col>
                            <Col>
                            <span className="mb-2"><strong>Email:</strong> hameo.kapy@gmail.com</span>
                            </Col>
                        </Row>
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