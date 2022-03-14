import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import tikLogo from '../../assets/img/tikLogo.png'


export const Header = () => {
  return <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
    <Navbar.Brand>
      <img src={tikLogo} className="" alt="logo" width="130px" />

    </Navbar.Brand>
    <Navbar.Toggle aria_controls = "basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/dashboard">Tickets</Nav.Link>
        <Nav.Link href="/dashboard">Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>


};
