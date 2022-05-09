import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import './AddProduct.css'
const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [ user] = useAuthState(auth);

    const handleAddProduct = e =>{
        e.preventDefault();
        const productDetail = {
            name: e.target.name.value,
            email : user?.email,
            price: e.target.price.value,
            description: e.target.description.value,
            quantity: e.target.quantity.value,
            supplier: e.target.supplier.value,
            img: e.target.img.value
      
          }

          fetch('https://ancient-gorge-82683.herokuapp.com/products', {
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
            <input className='mb-2' type="text" name='name' placeholder='name' required />
            <input className='mb-2' type="text" name='supplier' placeholder='Supplier'required />
            <input className='mb-2' type="number" name='quantity' placeholder='Quantity' required/>
            <input className='mb-2' type="number" name='price' placeholder='Price'required  />
            <input className='mb-2' type="email" name='email' value={user?.email} placeholder='email' readOnly required />
            <textarea className='mb-2' type="text" name='description' placeholder='Description'required />
            <input className='mb-2' type="text" name='img' placeholder='img url' required />
            <input type="submit" value="Add product" />
        </form>





<ToastContainer></ToastContainer>







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