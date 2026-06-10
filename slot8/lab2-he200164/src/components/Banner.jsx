import { Carousel, Image } from 'react-bootstrap';

const Banner = ({ slideshowData }) => {
    return (
        <Carousel className="mb-5 shadow-sm" fade>
            {slideshowData.map((slide) => (
                <Carousel.Item key={slide.id}>
                    <img
                        className="d-block w-100"
                        src={slide.imageLink}
                        alt={slide.title}
                        style={{ height: '600px', objectFit: 'cover', filter: 'brightness(0.9)' }}
                    />
                    <Carousel.Caption className="bg-dark bg-opacity-50 rounded-4 p-4 mb-4 backdrop-blur">
                        <h2 className="fw-bold text-uppercase tracking-wider">{slide.title}</h2>
                        <p className="fs-5 mb-0 text-light">{slide.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Banner;