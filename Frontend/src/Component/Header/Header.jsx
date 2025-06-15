import React from 'react';
import '../Styles/Header.css';

const Header = () => {

  const HandleLoginPage = () =>{
    window.location.href = "/Login"
  }
  return (
    <header className="green-vista-header">
      <div className="logo">🌿 Green Vista</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#showcase">Showcase</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
        <button className='Login_btn' onClick={HandleLoginPage}>login</button>
      </nav>
      
    </header>
  );
};

export default Header;
