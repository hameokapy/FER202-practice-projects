import { Carousel } from 'react-bootstrap'
import { carousels } from '../data/carousels';

const HeroSection = () => {
    return (
        <Carousel>
            {carousels.map((item) => (
                <Carousel.Item key={item.id}>
                    <img src={item.image} className="d-block w-100" alt={item.title}/>
                    <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default HeroSection;