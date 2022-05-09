import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css'

const Products = () => {
    const [products,setProducts] = useState([]);
    console.log(products);
    useEffect(()=>{
        fetch('https://ancient-gorge-82683.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    
    },[])

    const navigate = useNavigate();

    const handleDeliveryBtn = id =>{
        navigate(`/products/${id}`)
    }

    return (
        <div className='container'>
            <h3 className='mt-5'>Items</h3>

           <div className='products-container'>
           {products?.slice(0,6).map(product => <>
                
            <div className="card">
    <div className="card-header">
      <img src={product?.img} alt="rover" />
    </div>
    <div className="card-body">
      <span className="tag tag-teal">{product?.supplier}</span>
      <h4>
        {product?.name}
      </h4>
      <h5>{'$' + product?.price}</h5>
      <p>
        {product?.description}
      </p>    

           <div className='d-flex'>
           <button className='delivery-btn' onClick={() => handleDeliveryBtn(product?._id)}>Delivery</button>
           <h6 className='mx-4'>Available : {product?.quantity}</h6>
           </div>
    </div>
  </div>



           </>)}

           </div>
        </div>
    );
};

export default Products;