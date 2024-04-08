import React from "react"
import { Link } from "gatsby"
import { container, purple, green } from '../components/layout.module.scss'

const Layout = ({ pageTitle, children, pageColor }) => {
    return (
        // <div className={container}>
        <div className="container-fluid">
            <div className="layer"></div>
            <nav>
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
            </nav>
            
            <main className={pageColor}>  
            <h1>{pageTitle}</h1>           
                {children}
            </main>
        </div>
    )
}
export default Layout