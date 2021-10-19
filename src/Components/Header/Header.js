import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const {user,logOut} = useAuth();
    return (
          <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand href="#home"> Dhaka Medical College </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link href="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to ="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to ="/home#aboutUs">About Us</Nav.Link>
      <Nav.Link as={HashLink} to ="/home#students">Feedback</Nav.Link>
      {
        user?.email ?
        <Button onClick={logOut} variant ="light">Log out</Button> :
        <Nav.Link as={HashLink} to ="/register">Log in</Nav.Link>
      }
      {/* <Nav.Link as={HashLink} to ="/register">Login</Nav.Link> */}
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  <br />
  
  
</>
           
      
    );
};

export default Header;