import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import './AddProduct.css'
const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const onSubmit = data => {
    //     fetch('http://localhost:5000/products' , {
    //         method: 'POST',
    //         headers: {
    //             'content-type' : 'application/json'
    //         },
    //         body : JSON.stringify(data)
    //     })
    //     .then(res => res.json())
    //     .then(result => {
    //         console.log(result);
    //     })
    // }

    const handleAddProduct = e =>{
        e.preventDefault();
        const productDetail = {
            name: e.target.name.value,
            price: e.target.price.value,
            description: e.target.description.value,
            quantity: e.target.quantity.value,
            supplier: e.target.supplier.value,
            img: e.target.img.value
      
          }

          fetch('http://localhost:5000/products', {
      method: 'POST',
      body: JSON.stringify(productDetail),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.acknowledged) {
          toast("Product Added Successful!")
          e.target.reset()
        }
      });
    }

    return (
        <div className='w-50 mx-auto'>
            <h3>Add a new product</h3>

        <form onSubmit={handleAddProduct} className='d-flex flex-column' action="">
            <input className='mb-2' type="text" name='name' placeholder='name' />
            <input className='mb-2' type="text" name='supplier' placeholder='Supplier' />
            <input className='mb-2' type="number" name='quantity' placeholder='Quantity' />
            <input className='mb-2' type="number" name='price' placeholder='Price' />
            <textarea className='mb-2' type="text" name='description' placeholder='Description' />
            <input className='mb-2' type="text" name='img' placeholder='img url' />
            <input type="submit" value="Add product" />
        </form>













    {/* <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder='Name'  {...register("Name")} />
      <input className='mb-2' placeholder='Supplier' {...register("supplier")} />
      <input className='mb-2' placeholder='Quantity' type='number' {...register("quantity")} />
      <textarea className='mb-2' placeholder='Description' {...register("description")} />
      <input className='mb-2' placeholder='Img url' {...register("img")} />
      <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
      <input type="submit" value='Add product' />
    </form> */}
        </div>
    );
};

export default AddProduct;