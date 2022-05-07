import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = (props) => {
    const {name,price,img,description} = props.product;
    return (
        <div>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            
        </Card.Body>
        </Card>

        </div>
    );
};

export default ProductCard;