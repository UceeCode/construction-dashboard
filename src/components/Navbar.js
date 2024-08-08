import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
      <div className="container">
        <div className='logo'>
            <h1>StoneWorks</h1>
        </div>
        <div className='nav-links'>
            <i class="fa-solid fa-bell"></i>
            <i class="fa-solid fa-gear"></i>
        </div>
      </div>
  );
};

export default Navbar;
