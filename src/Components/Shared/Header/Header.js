import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
      <nav>
      <Navbar className='p-3' collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container>
<Navbar.Brand ><h4> Musica</h4></Navbar.Brand>

<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">

<Nav className="me-auto">
</Nav>

<Nav>
<Link className='link-css' to='/home'>Home</Link>
<Link className='link-css' to='/inventory'>Inventory</Link>
<Link className='link-css' to='/items'>Items</Link>
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
  </nav>
    );
};

export default Header;