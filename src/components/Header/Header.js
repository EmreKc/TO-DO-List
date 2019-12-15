import React from 'react';

import './Header.css';

const Header = ({ className }) => (
  <div className={className}>
    <div className="header__container">
      <nav className="navbar">
        <span className="header__span">TODO List</span>
      </nav>
    </div>
  </div>
);


export default Header;
