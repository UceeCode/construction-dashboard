import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);

        if (isDarkMode) {
            document.body.classList.remove('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
        }
    };

    return (
        <div className="container">
            <div className="logo">
                <h1><i className="fa-solid fa-helmet-safety fa-flip"></i> StoneWorks</h1>
            </div>
            <div className="nav-links">
                <i className="fa-solid fa-bell"></i>
                <i className="fa-solid fa-user"></i>
                <i
                    className={`fa-solid ${isDarkMode ? 'fa-lightbulb' : 'fa-moon'}`}
                    onClick={toggleDarkMode}
                ></i>
            </div>
        </div>
    );
};

export default Navbar;
