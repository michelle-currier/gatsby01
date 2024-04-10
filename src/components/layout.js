import React from "react"
import { Link } from "gatsby"
// import { container, purple, green } from './layout.module.scss'
// import { Header } from './header'
import { SiteNav } from "./siteNav"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { BootstrapIcon } from 'bootstrap-icons-react';
// import { Icon } from 'react-bootstrap';

const Layout = ({ pageTitle, children }) => {
  return (
    // <div className={container}>
    <div className="container-fluid">  
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/artist/artist">Artists</Link>
                    </li>
                    <li>
                        <Link to="/event/event">Events</Link>
                    </li>
                    <li>
                        <Link to="/shop/shop">Shop</Link>
                    </li>
                </ul>
            </nav> */}

        <Navbar className="bg-body-tertiary" fixed="bottom" expand="lg" >
        <Container>
            <Navbar.Brand href="/">
            {/* <BootstrapIcon icon="home" /> */}

{/* <Icon icon="user" /> */}
            Frenchmen Art Bazaar</Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <ul>
                <li>
                    <Link to="/artist/artist">Artists</Link>
                </li>
                <li><Link to="/artist/faqs">FAQs</Link></li>
                <li><Link to="/event/event">Events</Link></li>
                <li><Link to="/shop/shop">Shop</Link></li>
                </ul>  
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

            {/* <SiteNav /> */}
            {/* <main className={pageColor}>   */}
      <main>
        <h1>{pageTitle}</h1>           
        {children}
      </main>
    </div>
  )
}
export default Layout