import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import { ReactComponent as ReactLogo } from '../../images/paw.svg';

 const Layout = () => {
     return (
        <Navbar bg='dark' variant='dark' expand='lg'>
    <Navbar.Brand href='/' className='navbar__logo'><ReactLogo /></Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='mr-auto'>
        <Nav.Link href='/'>Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
     );
 };

 export default Layout;