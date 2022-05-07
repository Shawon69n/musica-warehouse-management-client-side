import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <div className='banner'>
            <Banner></Banner>
            </div>
            <Products></Products>
        </div>
    );
};

export default Home;