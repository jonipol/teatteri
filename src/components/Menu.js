import React from 'react';

// Styling
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = () => {


  // TODO: Fix id's
  // Kuvagallerialle parempaa näkyvyyttä, jos ei dropdown valikossa...?
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#'>Ristin kesäteatteri</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav ClassName='mr-auto'>
            <Nav.Link href='#'>Etusivu</Nav.Link>
            <Nav.Link href='#'>Sijainti & yhteystiedot</Nav.Link>
            <Nav.Link href='#'>Hinnasto</Nav.Link>
            <Nav.Link href='#'>Ennen esitystä???</Nav.Link>
            <NavDropdown title='Historiaa' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#'>Aiempaa ohjelmistoa</NavDropdown.Item>
              <NavDropdown.Item href='#'>Teatterin historiaa</NavDropdown.Item>
              <NavDropdown.Item href='#'>Kuvagalleria?</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;