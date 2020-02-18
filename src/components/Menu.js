import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Styling
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  const toggleNav = () => {
    setNavExpanded(navExpanded ? false : 'expanded');
  };

  return (
    <div>
      <Navbar collapseOnSelect bg='light' expand='md' expanded={navExpanded}>
        <Navbar.Brand as={Link} to='/'>Ristin kesäteatteri</Navbar.Brand>
        <Navbar.Toggle onClick={toggleNav}/>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='justify-content-center' onSelect={toggleNav} style={{fontSize: '1.15em'} }>
            <Nav.Link as={Link} to='/' onClick={toggleNav}>Etusivu</Nav.Link>
            <Nav.Link as={Link} to='/sijainti' onClick={toggleNav}>Sijainti & yhteystiedot</Nav.Link>
            <Nav.Link as={Link} to='/hinnasto' onClick={toggleNav}>Hinnasto</Nav.Link>
            <Nav.Link as={Link} to='/ennen' onClick={toggleNav}> Ennen esitystä???</Nav.Link>
            <NavDropdown title='Historiaa' id='collasible-nav-dropdown' >
              <NavDropdown.Item as={Link} to='/aiempaa' onClick={toggleNav}>Aiempaa ohjelmistoa</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/historiaa' onClick={toggleNav}>Teatterin historiaa</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/kuvagalleria' onClick={toggleNav}>Kuvagalleria?</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;