import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'
const ProductDetail = () => {
    const {productId} = useParams();
    const [product,setProduct] = useState([]);
    const {name,img,quantity,price,description,supplier} = product;
    useEffect(()=>{
        const url = `http://localhost:5000/products/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (

    <div className='container'>
        <div className="row mt-5">

                <div className="col">
                    <img className='w-25' src={img} alt="" />
                </div>

                <div className="col">
                    <h3>Name : {name}</h3>
                    <p>Brand : {supplier}</p>
                    <h5>Price : {price +"$"}</h5>
                    <h6>Available : {quantity}</h6>
                    <p>{description}</p>

                    <div>
                        <button className='delivery-btn'>delivered</button>
                        <input className='input' type="number" name="restock" id="" /> <input className='input-btn' type="button" value="restock" />
                    </div>

                </div>

        </div>
     </div>
    );
};

export default ProductDetail;