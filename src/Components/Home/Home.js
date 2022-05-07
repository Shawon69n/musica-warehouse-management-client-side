import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner/Banner';
import Brands from './Brands/Brands';

const Home = () => {
    return (
        <div>
            <div className='banner'>
            <Banner></Banner>
            </div>
            <Products></Products>

            <div>
                <h1 className='mt-5 mb-5'>Top brands</h1>
                <Brands></Brands>
            </div>
        </div>
    );
};

export default Home;