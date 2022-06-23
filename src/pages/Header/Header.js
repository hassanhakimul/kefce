import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo1.png'
import { GrCart } from "react-icons/gr";
const Header = () => {
  return (

    <Navbar collapseOnSelect expand="lg" className='fw-bold'>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-5">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Menu</Nav.Link>
            <Nav.Link href="#servicing">Service</Nav.Link>
            <Nav.Link href="#shoping">Shop</Nav.Link>
          </Nav>
          <Nav>
            <form class="d-flex">
              <input class="form-control me-2  fw-bold" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn cart" type="cart" ><GrCart/></button>
            </form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;