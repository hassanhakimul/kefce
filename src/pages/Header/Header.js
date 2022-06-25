import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo1.png'
import { GrCart } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import auth from '../../fireabase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const Header = () => {
  const [user] = useAuthState(auth);
const navigate=useNavigate();
  const handleSignOut = () => {
    signOut(auth);
  }
  
  return (
    <Navbar collapseOnSelect expand="lg" className='fw-bold'>
      <Container>
        <Navbar.Brand as={Link} to="/home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-5">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/service">Service</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            {
                user ?
                  <button className='btn btn-link  text-decoration-none sign_out' onClick={handleSignOut}>Sign Out</button>
                  :
                  <Nav.Link as={Link} to="login" >
                    Sign in
                  </Nav.Link>}
          </Nav>
          <Nav>
            <form class="d-flex">
              <input class="form-control me-2  fw-bold" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn cart" type="cart" onClick={()=>navigate('/cart')} ><GrCart/></button>
            </form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;