// navbar.js
import React from 'react';
import './navbar.css';
import favicon from '../../assets/ai.png'

const Navbar = () => {
    const handleScroll = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={favicon} alt="favicon" />
                <a onClick={() => handleScroll('info')}>Info</a>
                <a onClick={() => handleScroll('partners')}>Partners</a>
                <a onClick={() => handleScroll('team')}>Team</a>
                <a onClick={() => handleScroll('blog')}>Blogs</a>
            </div>
            <div className="navbar-center">
                <h1 className={'gradient__text'}>Silent Safety</h1>
            </div>
            <div className="navbar-right">
                <a href="mailto:silentsafetyofficial@gmail.com">silentsafetyofficial@gmail.com</a>
            </div>
        </nav>
    );
};

export default Navbar;
