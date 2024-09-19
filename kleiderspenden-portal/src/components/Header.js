import React from 'react';
import './Header.css';
import logo from '../assets/logo.png'; 

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Logo" className="header-logo" />
        <h1 className="header-title">Kleiderspenden-Portal</h1>
        <nav className="header-nav">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#registration">Registrierung</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Kontakt</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#impressum">Impressum</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

