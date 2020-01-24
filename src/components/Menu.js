import React from 'react';
import { Link } from 'react-router-dom';

// Styling
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = () => {


  // TODO: Fix id's
  // Kuvagallerialle parempaa näkyvyyttä, jos ei dropdown valikossa...?
  return (
    <div>
      <Navbar collapseOnSelect bg='light' expand='md'>
        <Navbar.Brand as={Link} to='/'>Ristin kesäteatteri</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='/'>Etusivu</Nav.Link>
            <Nav.Link as={Link} to='/sijainti'>Sijainti & yhteystiedot</Nav.Link>
            <Nav.Link as={Link} to='/hinnasto'>Hinnasto</Nav.Link>
            <Nav.Link as={Link} to='/ennen'>Ennen esitystä???</Nav.Link>
            <NavDropdown title='Historiaa' id='collasible-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/aiempaa'>Aiempaa ohjelmistoa</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/historiaa'>Teatterin historiaa</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/kuvagalleria'>Kuvagalleria?</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;