import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MenuNavigation = () => {
  return (
    <Navbar bg="light" expand="lg" className='pt-3 px-4'>


        <Navbar.Brand className='mr-auto' href="#home">Dojo Karate Ieq Jardim Lourdes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Sobre Nós</Nav.Link>
            <Nav.Link href="#link">Encontre-nos</Nav.Link>
            
            
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Entrar</Nav.Link>
            <Nav.Link href="#link">Cadastre-se</Nav.Link>
           
            
            
          </Nav>
        </Navbar.Collapse>
  
    </Navbar>
  )
}

export default MenuNavigation