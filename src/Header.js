import './App.css';
import Logo from './img/Great-Logo-Maya.png';
import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolling = window.scrollY > 0;
            setScrolling(isScrolling);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={scrolling ? 'scrolling-active' : ''}>
            <nav className="navbar">
                <div>
                    <a href="#home" className="header-logo"><img className="logoImg" src={Logo} alt="Img" /></a>
                </div>
                <ul className="navbar-list-items">
                    <li><a href="#project" className="navbar-link">Project</a></li>
                    <li><a href="#about" className="navbar-link">About Us</a></li>
                    <li><a href="#coreValue" className="navbar-link">Core Values</a></li>
                    <li><a href="#mission_vision" className="navbar-link">Mission & Vision</a></li>
                </ul>
                <div className='contact-circle'>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
