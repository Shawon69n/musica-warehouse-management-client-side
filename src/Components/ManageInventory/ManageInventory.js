import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageInventory.css'
const ManageInventory = () => {
    const [products,setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Username</th>
    </tr>
  </thead>
    {products.map(product => 
        <>
         <tbody>
    <tr>
      <td>{product?.name}</td>
      <td>Otto</td>
      <td>
          <button className='delivery-btn'>Update</button>
          <button className='remove-btn'>Remove</button>
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