import { Carousel, Image } from 'react-bootstrap';

const Banner = ({ slideshowData }) => {
    return (
        <Carousel className="mb-5">
            {slideshowData.map((slide) => (
                <Carousel.Item key={slide.id}>
                    <Image
                        className="d-block w-100"
                        src={slide.imageLink}
                        alt={slide.title}
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                        <h3>{slide.title}</h3>
                        <p>{slide.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Banner;