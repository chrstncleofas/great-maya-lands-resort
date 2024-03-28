import '../App.css';
import { FaBars } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import Logo from '../components/img/Header-Logo.png';

const Header = () => {
    // Scrolling Effect
    const [scrolling, setScrolling] = useState(false);
    // Menu
    const [showMenu, setShowMenu] = useState(false);

    // Toggle Menu
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    // Scrolling Use Effect 
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
                    <a href="#home" className="headerLogo"><img className="imageLogo" src={Logo} alt="Img" /></a>
                </div>
                <button className="menu-btn" onClick={toggleMenu}><FaBars /></button>
                <ul className={`navbar-list-items ${showMenu ? 'active' : ''}`}>
                    <li><a href="#project" className="navbar-link">PROJECT</a></li>
                    <li><a href="#about" className="navbar-link">ABOUT US</a></li>
                    <li><a href="#coreValue" className="navbar-link">CORE VALUES</a></li>
                    <li><a href="#mission_vision" className="navbar-link">MISSION & VISION</a></li>

                    <div className='btnContact-mb-view'>
                        <a href="#contact">Contact</a>
                    </div>
                </ul>
                <div className='btnContact'>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
