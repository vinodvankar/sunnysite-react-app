import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">sunnyside</div>
            <div className="navbar">
                <ul className="navlinks">
                    <li>About</li>
                    <li>Service</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
