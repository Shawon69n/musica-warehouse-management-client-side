import React from 'react';
import { Card } from 'react-bootstrap';
import './ProductCard.css'
const ProductCard = (props) => {
    const {name,price,img,description} = props.product;
    return (
        <div>

        <Card className='card-box' style={{ width: '18rem' }}>
        <Card.Img variant="top" className='image-config' src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
        </Card.Body>
        <button className='btn btn-primary'>Delivery</button>
        </Card>

        </div>
    );
};

export default ProductCard;