import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useProducts from '../Hooks/useProducts';
import './ManageInventory.css'
const ManageInventory = () => {
    const [products,setProducts] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const navigate = useNavigate();

    const handleUpdateBtn = id =>{
        navigate(`/products/${id}`)
    }




    const handleRemoveBtn = id =>{
        const confirm = window.confirm('You sure want to remove ?')
        if(confirm){
            fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((json) => {
                console.log('success');
                const remaining = products.filter(product => product._id !== id )
                setProducts(remaining);
                toast('Remove succesful')
            }
            )
        }
    }

    return (
        <div>
            <Table responsive striped bordered hover >
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Handle</th>
    </tr>
  </thead>
    {products.map(product => 
        <>
         <tbody>
    <tr>
      <td>{product?.name}</td>
      <td>{user?.email}</td>
      <td>
          <button onClick={() => handleUpdateBtn(product?._id)} className='delivery-btn'>Update</button>
          <button onClick={() => handleRemoveBtn(product?._id)} className='remove-btn'>Remove</button>
      </td>
    </tr>
  </tbody>
        </>
    )}
</Table>
        </div>
    );
};

export default ManageInventory;