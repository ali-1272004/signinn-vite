import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    //  <Navbar bg="dark" variant="dark" expand="lg">
    //   <Container>
    //     <Navbar.Brand as={Link} to="/">🏥 My Hospital</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link as={Link} to="/">Home</Nav.Link>
    //         <Nav.Link as={Link} to="/departments">Departments</Nav.Link>
    //         <Nav.Link as={Link} to="/doctors/orthopedics">Doctors</Nav.Link>
    //         <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">🏥 My Hospital</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/departments">Departments</Nav.Link>

            {/* Doctors nested under Departments */}
            <NavDropdown title="Doctors" id="doctors-dropdown">
              <NavDropdown.Item as={Link} to="/departments/orthopedics">
                Orthopedics
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/departments/pediatrics">
                Pediatrics
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/departments/dermatology">
                Dermatology
              </NavDropdown.Item>
              {/* Add more departments as needed */}
            </NavDropdown>

            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;