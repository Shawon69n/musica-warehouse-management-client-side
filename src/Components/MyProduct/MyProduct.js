import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProduct = () => {
    const [products,setProducts] = useState([]);
    console.log(products);
    const [user] = useAuthState(auth);
    useEffect(() =>{
        fetch(`http://localhost:5000/addproduct?email=${user?.email}`,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    const handleRemoveBtn = id =>{
        const confirm = window.confirm('You sure want to remove ?')
        if(confirm){
            fetch(`http://localhost:5000/addproduct/${id}`, {
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
            
            <h4 className='mt-4 mb-4'>Added product</h4>
        
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
                     <button  className='delivery-btn'>Update</button>
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

export default MyProduct;