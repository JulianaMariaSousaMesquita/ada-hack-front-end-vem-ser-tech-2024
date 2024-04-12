import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="menu-icon">&#9776;</div>
      <h1 className="title">Corps Solution</h1>
      <button className="login-button">Login</button>
    </header>
  );
};

export default Header;
