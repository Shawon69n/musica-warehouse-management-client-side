import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'
const ProductCard = (props) => {
    const {name,price,img,description,quantity,supplier,_id} = props.product;

    const navigate = useNavigate();

    const handleDeliveryBtn = id =>{
        navigate(`/products/${id}`)
    }
    return (
        <div>

        <Card className='card-box' >
        <Card.Img variant="top" className='image-config' src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <h5>{price + '$'}</h5>
            <p>Brand : {supplier}</p>
            <p>Quantity : {quantity}</p>
            <Card.Text>
            {description}
            </Card.Text>
        </Card.Body>
        <button onClick={() => handleDeliveryBtn(_id)} className='btn btn-primary'>Delivery</button>
        </Card>

        </div>
    );
};

export default ProductCard;