import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-auto">
            <Container className="text-center">
                <h4>Student Information</h4>
                <p className="mb-1"><strong>Student Name:</strong> Lê Thu Hà</p>
                <p className="mb-1"><strong>Student ID:</strong> HE200164</p>
                <p className="mb-1"><strong>Class Name:</strong> SE2009</p>
                <p className="mb-0"><strong>Email Address:</strong> hameo.kapy@gmail.com</p>
            </Container>
        </footer>
    );
};

export default Footer;