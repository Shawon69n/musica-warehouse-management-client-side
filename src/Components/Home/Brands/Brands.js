import React from 'react';
import { Card } from 'react-bootstrap';
import './Brands.css'
const Brands = () => {
    return (
        <div>
            
              
                 
             

            <div class="container">
                    <div class="row">
                            <div class="col">
                            <Card.Img className='brand-box' variant="top"  src={`https://i.pinimg.com/originals/71/cf/66/71cf66f700b9f45daea64e9b1e6801c2.jpg`} />
                            </div>
                            <div class="col">
                            <Card.Img className='brand-box' variant="top"  src={`https://www.solomusicgear.com/wp-content/uploads/2020/05/9190560303_merch_frt_001_nr.jpg`} />
                            </div>
                            <div class="col">
                            <Card.Img className='brand-box' variant="top"  src={`https://www.logolynx.com/images/logolynx/49/49ddafc94d0663360512c149ab5aabca.jpeg`} />
                            </div>
                            <div class="col">
                            <Card.Img className='brand-box' variant="top"  src={`https://logodix.com/logo/1934522.jpg`} />
                            </div>
                            <div class="col">
                            <Card.Img className='brand-box' variant="top"  src={`https://i.etsystatic.com/34531699/r/il/cce3ab/3800330793/il_340x270.3800330793_2y7v.jpg`} />
                            </div>
                    </div>
            </div>
             
        </div>
    );
};

export default Brands;