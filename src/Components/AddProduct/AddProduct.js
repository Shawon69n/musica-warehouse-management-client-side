import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'
const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/products' , {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h3>Add a new product</h3>
    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder='Name'  {...register("Name")} />
      <input className='mb-2' placeholder='Supplier' {...register("supplier")} />
      <input className='mb-2' placeholder='Quantity' type='number' {...register("quantity")} />
      <textarea className='mb-2' placeholder='Description' {...register("description")} />
      <input className='mb-2' placeholder='Img url' {...register("img")} />
      <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
      <input type="submit" value='Add product' />
    </form>
        </div>
    );
};

export default AddProduct;