import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner/Banner';
import Brands from './Brands/Brands';
import CountUpSection from './countUpSection/CountUpSection';

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

        <div>
            <CountUpSection></CountUpSection>
        </div>

        </div>
    );
};

export default Home;