import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
        <Navbar bg="success" variant="success">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={''} style={{textDecoration:'none',color:'white'}}>
          <i class="fa-solid fa-people-roof fa-3x"></i></Link>
          <strong className='ms-4 fs-3 me-5 text-light'>Employee Management</strong>  </Navbar.Brand>        
          <Nav className="mr-auto">
            <Nav.Link href="#home"><strong className='text-light'>Home</strong></Nav.Link>
            <Nav.Link href="#features"><strong className='text-light'>Features</strong></Nav.Link>
            <Nav.Link href="#pricing"><strong className='text-light'>Pricing</strong></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header