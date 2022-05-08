import React from 'react';
import useProducts from '../Hooks/useProducts';
import ProductCard from './ProductCard/ProductCard';
import './Products.css'

const Products = () => {
    const [Products] = useProducts();
    return (
        <div className='container'>
            <h3 className='mt-5'>Items</h3>

           <div className='products-container'>
           {Products.map(product => <ProductCard product={product} key={product._id}></ProductCard>)}
           </div>
        </div>
    );
};

export default Products;