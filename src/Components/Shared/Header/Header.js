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
<Navbar.Brand ><h4> Musica</h4></Navbar.Brand>

<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">

<Nav className="me-auto">
</Nav>

<Nav>
<Link className='link-css' to='/home'>Home</Link>
{!user && <Link className='link-css' to='/Blogs'>Blogs</Link>
}
{user &&  <Link className='link-css' to='/manageinventory'>Manage Inventory</Link> }
{user && <Link className='link-css' to='/addproduct'>Add Product</Link> }

{user? <p onClick={handleSignOut} className='sign-out-btn'><span className='text-white span-text'>sign out</span></p> : <Link as={Link} to='/login'> <span className='text-white link-css text-deco'>Log in</span></Link>}



</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
  </nav>
    );
};

export default Header;