import React from 'react';
import useProducts from '../Hooks/useProducts';
import ProductCard from './ProductCard/ProductCard';
import './Products.css'

const Products = () => {
    const [Products] = useProducts();
    return (
        <div>
            <h3>Itmes</h3>

            {Products.map(product => <ProductCard product={product} key={product.id}></ProductCard>)}
        </div>
    );
};

export default Products;