import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
         <Navbar expand="sm" className="bg-info">
      <Container>
        <Navbar.Brand ><Link style={{textDecoration:'none', color:'blue'}} to={'/'}>KKTM Govt. College, Pullut</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link style={{textDecoration:'none', color:'blue'}} to={'/data'}>Data</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration:'none', color:'blue'}} to={'/tc'}>TC</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration:'none', color:'blue'}} to={'/display'}>Students</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header