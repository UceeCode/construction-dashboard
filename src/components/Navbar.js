import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="container">
            <div className="logo">
                <h1><i class="fa-solid fa-helmet-safety fa-flip"></i>StoneWorks</h1>
            </div>
            <div className="nav-links">
                <i className="fa-solid fa-bell"></i>
                <i className="fa-solid fa-gear"></i>
            </div>
        </div>
    );
};

export default Navbar;
