import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {   // Change navbar color when scrolled down 100 pixels or more
      setColor(true);
    } else {
      setColor(false);   // Revert navbar color if scrolled back to the top
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link  to='/' className='CompanyName'>Visit Ethiopia</Link>
      <ul className={click ? "nav_ul active" : 'nav_ul'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* Use lowercase '/about' for consistency */}
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

 
       <div className="navhamber" onClick={handleClick}>
        {click ? (
          <FaTimes size={23} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={23} style={{ color: '#fff' }} />
        )}
      </div> 
    </div>
  );
}

export default NavBar;
