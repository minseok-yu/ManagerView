import React from 'react';
import { Link } from 'react-router-dom';
import '../../context/css/Header.css';

function Header() {
  return (
    <header className="computer-client-header">
      <div className="logo">
        <Link to="/" className="logo-link" style={{color: 'black'}}>
          <h1>Well-kit Manager</h1>
        </Link>
      </div>
      
    </header>
  );
}

export default Header;
