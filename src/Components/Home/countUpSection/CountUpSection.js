import React from 'react';
import './CountUp.css'
import CountUp from 'react-countup';
const CountUpSection = () => {
    return (
        <div>
            <div class="container margin-top">

                <h1>Our achivement</h1>
                    <div class="row">

                            <div class="col">
                                <div className='count-box'>
                                    <h3>Liked</h3>
                                <img className='w-50' src={`https://png.pngtree.com/png-vector/20210215/ourlarge/pngtree-logo-like-icon-for-instagram-in-red-png-image_2908035.jpg`} alt="" />
                                <CountUp start={0} end={55000} suffix='+' />
                                </div>
                            </div>
                            <div class="col">
                                <div className='count-box'>
                                <h3>Reviews</h3>
                                <img className='mt-3' style={{ width: '80px' }} src={`https://diecastdad.com/wp-content/uploads/2018/03/42-420797_thank-you-for-customer-review-post-transparent-reviews.png`} alt="" />
                                <CountUp start={0} end={99990}  suffix='+'/>
                                </div>
                            </div>
                            <div class="col">
                                <div className='count-box'>
                                    <h3>Following</h3>
                                <img style={{ width: '100px' }} src={`https://media.istockphoto.com/vectors/counterfriend-request-quantity-follower-notification-symbol-instagram-vector-id1094314770?k=20&m=1094314770&s=612x612&w=0&h=mkaweEzKjgSwG2mN7QL_pcR7KqVEhT-pt3Xhd0zZA5o=`} alt="" />
                                <CountUp start={0} end={75000} suffix='+' />
                                </div>
                            </div>

                    </div>
            </div>
        </div>
    );
};

export default CountUpSection;