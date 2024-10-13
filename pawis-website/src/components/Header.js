import {Link } from "react-router-dom"
import React, { useState } from 'react';

import './Header.css'

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = (e) => {
        e.preventDefault(); // Prevent default anchor action
        setMenuOpen(true);  // Set menu as open
    };

    const handleMenuClose = (e) => {
        e.preventDefault(); // Prevent default anchor action
        setMenuOpen(false); // Set menu as closed
    };


    return (
        <div className="header">
            <div className="header-left">
                <Link to="/">
                    <img src="/assets/logos/pawis-logo.svg" alt="pawis-logo" style={{ width: '9em', height: 'auto' }} />
                </Link>
            </div>
            <div className="header-right">
                <nav>
                    <ul className={menuOpen ? 'open' : ''}>
                        <li>
                            <a href = "#" className="menu-close hide-desktop" onClick={handleMenuClose}>
                                <img src="/assets/logos/xmark-solid.svg" alt="Close menu" style={{ width: '1.5em', height: 'auto' }} />
                            </a>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/news-room">News Room</Link>
                        </li>
                        <li>
                            <Link to="/get-involved">Get Involved</Link>
                        </li>
                        <li>
                            <Link to="/research">Research</Link>
                        </li>
                    </ul>
                </nav>
                <div className="socials">
                    <a href="#">
                        <img src="/assets/logos/fbook.svg" alt="Facebook" />
                    </a>
                    <a href="#">
                        <img src="/assets/logos/igram.svg" alt="Instagram" />
                    </a>
                    <a href = "#" className="menu-open hide-desktop" onClick={handleMenuOpen}>
                        <img src="/assets/logos/bars.svg" alt="Open menu" style={{ width: '3em', height: 'auto' }} />
                    </a>
                </div>
            </div>
        </div>
    );
}