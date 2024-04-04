import React from "react"
import { Link } from "gatsby"
import { container } from '../components/layout.module.scss'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
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
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}
export default Layout