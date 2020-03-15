import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">Home</a>
                <a href="/logo">Logo</a>
                <a href="/blog">Blog</a>
            </nav>
        </div>
    );
};

export default Header;