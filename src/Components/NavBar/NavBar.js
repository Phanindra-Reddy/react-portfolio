import React from 'react';
import './NavBar.css';

import logo from '../assets/phanindra.png';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

const NavBar = () => {

    return (
        <>
            
            <Navbar className="navbar sticky-top" bg="dark" variant="dark" sticky="top" expand="lg" collapseOnSelect>
                <Navbar.Brand href="#home">
                    <img 
                        src={logo} 
                        alt="phanindra" 
                        style={{width:'30px',height:'30px',margin:'0px 10px'}}
                        className="d-inline-block align-center"
                    />
                    Phanindra
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{margin:'0px 10px'}}/>
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="navbar-items text-center">
                        <NavDropdown.Divider style={{background:'white'}}/>
                        <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
                        <Nav.Link href="#about" className="nav-link">About</Nav.Link>
                        <Nav.Link href="#projects" className="nav-link">My Work</Nav.Link>
                        <Nav.Link href="#resources" className="nav-link">Resources</Nav.Link>
                        <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}

export default NavBar;
