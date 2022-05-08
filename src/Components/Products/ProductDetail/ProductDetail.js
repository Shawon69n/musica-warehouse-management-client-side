import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {productId} = useParams();
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/products/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div>
            <h2>Product detail</h2>
            <h2>id : {productId}</h2>
            <h3>Name : {product.name}</h3>
        </div>
    );
};

export default ProductDetail;