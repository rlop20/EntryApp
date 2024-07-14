import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { faHome, faSearch, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  return (
    <nav className="navbar">
      
      <div className="navbar-title">Entry</div>

      <Link to="/" className="navbar-home">
        <FontAwesomeIcon icon={faHome} /> Home
      </Link>


      <Link to="/courses" className="navbar-list">
        <FontAwesomeIcon icon={faPlus} /> Courses
      </Link>

      <div className="navbar-login">
        <Link to="/login" className="navbar-login-link">
          <FontAwesomeIcon icon={faUser} /> Login
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
