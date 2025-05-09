import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="green-vista-header">
      <div className="logo">🌿 Green Vista</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#showcase">Showcase</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
