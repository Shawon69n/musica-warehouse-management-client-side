import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
const Header = () => {
  const [user] = useAuthState(auth)
  const handleSignOut = () =>{
    signOut(auth);
  
  }
    return (
      <nav>
      <Navbar className='p-3 nav-bg' collapseOnSelect expand="lg" >
<Container>
<Navbar.Brand > 
  <div className='d-flex'>
  <img className='img-width' src={`https://i.pinimg.com/originals/4c/68/3b/4c683b9bfa9a04be30f3036015835acd.jpg`} alt="" /><h4> Musica</h4>
  </div>
</Navbar.Brand>

<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">

<Nav className="me-auto">
</Nav>

<Nav>
<Link className='link-css' to='/home'>Home</Link>
{!user && <Link className='link-css' to='/Blogs'>Blogs</Link>
}
{user &&  <Link className='link-css' to='/manageinventory'>Manage Inventory</Link> }
{user &&  <Link className='link-css' to='/myproduct'>My product</Link> }
{user && <Link className='link-css' to='/addproduct'>Add Product</Link> }

{user? <p onClick={handleSignOut} className='sign-out-btn'><span className='text-white span-text'>sign out</span></p> : <Link className='link-css' to='/Login'>Login</Link>}



</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
  </nav>
    );
};

export default Header;