import React from 'react';
import { RiFacebookCircleLine } from 'react-icons/ri';
import {AiFillTwitterCircle} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import './Footer.css'
const Footer = () => {
    return (
        <footer className=''>
           
            
        <div className="container">

            <div className="row">

                <div className="col">
                <h3 className='text-white'>Musica</h3>
                 <p>It's all about musical insturment.</p>
                 <p><small>Copyright © 2022 by shawon</small></p>
                </div>

                <div className="col">
                    <h5>Product</h5>
                <li><span>About</span></li>
                <li><span>Services</span></li>
                <li><span>Inventory</span></li>
                <li><span>Blogs</span></li>
                <li><span>Items</span></li>
                </div>
                <div className="col">
                    <h5>Address</h5>
                <li><span>Baitus salam mosque road ,Shoniakhra</span></li>
                <li><span>jatrabari ,Dhaka-1236</span></li>
                </div>

                <div className="col">
                <li><span className='icons'><RiFacebookCircleLine></RiFacebookCircleLine></span></li>
                <li><span className='icons'><AiFillTwitterCircle></AiFillTwitterCircle></span></li>
                <li><span className='icons'><GrInstagram></GrInstagram></span></li>
                
                </div>
            </div>
         </div>
        </footer>
    );
};

export default Footer;