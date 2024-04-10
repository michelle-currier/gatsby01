// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
// import { Navbar, Nav } from "react-bootstrap"


// const SiteNav = () => {
//     return (
//         <header>
        
//             <Navbar>
//                 <Navbar.Brand href="/">
//                     Frenchmen Art Bazaar
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="navbarResponsive" />
//                 <Navbar.Collapse id="navbarResponsive">
//                     <Nav as="ul">
//                         <Nav.Item as="li">
//                             <Link to="/artist" className="nav-link">Artist</Link>
//                         </Nav.Item>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar> 
//         </header>
//     )
// }

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SiteNav() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Frenchmen Art Bazaar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
  );
}
export default SiteNav