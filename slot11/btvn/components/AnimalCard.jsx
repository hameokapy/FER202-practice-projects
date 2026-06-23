import PropTypes from 'prop-types';
import {Button, Card, ListGroup} from 'react-bootstrap'

export default function AnimalCard({name, scientificName, size, diet, image, additional = { notes: 'No Additional Information' }}) {
    const showAdditionalData = (additionalObj) => {
        const dataString = Object.entries(additionalObj)
        .map(([key, value]) => `${key}: ${value}`).join('\n');
        alert(dataString);
    }

    return (
        <Card>
            <Card.Img variant='top' src={image} style={{height:'300px', objectFit:'cover'}}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <ListGroup className='py-2'>
                    <ListGroup.Item>Scientific Name: {scientificName}</ListGroup.Item>
                    <ListGroup.Item>Size: {size} kg</ListGroup.Item>
                    <ListGroup.Item>Diet: {diet.join(', ')}</ListGroup.Item>
                </ListGroup>
                <div className='d-flex justify-content-center'>
                    <Button variant='danger' color='white' onClick={() => showAdditionalData(additional)}>More Info</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

// 4. Cấu hình định dạng kiểm tra dữ liệu cho object animal
AnimalCard.propTypes = {
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), //có thể là loại number or loại string
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string,
    additional: PropTypes.shape({
        link: PropTypes.string,
        notes: PropTypes.string
    })
};

//React 19: React team đã bỏ propTypes runtime checking cho function components.

// 5. Cấu hình giá trị mặc định cho additional nằm bên trong object animal
AnimalCard.defaultProps = {
    additional: {
        notes: 'No Additional Information'
    }
};