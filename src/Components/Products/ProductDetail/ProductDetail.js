import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

    const handleDelivery = () => {
        if (quantity >= 1) {
            let Remaining = parseFloat(+ product.quantity) - 1
            let newProduct = { img, name, price, quantity: Remaining, description, supplier }
            setProduct(newProduct)
            fetch(`http://localhost:5000/products/${productId}`, {
                method: 'PUT',
                body: JSON.stringify(newProduct),
                headers: {
                    'Content-type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log('success');
                }
                )
        }
       
    }

    const handleRestock = e =>{
        e.preventDefault()
        let updatedQuantity = parseFloat(+ product.quantity) + parseFloat(e.target.updatequantity.value)
        let newProduct = { img, name, price, quantity: updatedQuantity, description, supplier }
        setProduct(newProduct)
        fetch(`http://localhost:5000/products/${productId}`, {
            method: 'PUT',
            body: JSON.stringify(newProduct),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log('success');
            }
            )
    }

    const navigate = useNavigate();

    const navigateToInventory = () =>{
        navigate('/manageinventory')
    }

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
                        <button onClick={() => handleDelivery(quantity)} className='delivery-btn'>delivered</button>
                        <button onClick={navigateToInventory} className='manage-btn'>Manage inventory</button>
                        
                        <form onSubmit={handleRestock}>
                        <input
                        className='input'
                            type="number"
                            name='updatequantity'
                            placeholder="Add Quantity"
                            required />
                        <button className='input-btn' type="submit" >Add Now</button>
                    </form>

                    </div>

                </div>

        </div>
     </div>
    );
};

export default ProductDetail;