import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaSearch, FaUser, FaList, FaPlus } from 'react-icons/fa';
import './NavBar.css';
import { auth } from '../firebase';
import useAuth from '../useAuth';
import { signOut } from 'firebase/auth';

const NavBar = () => {
  const navigate = useNavigate();
  const currentUser = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbar-home">
        <div className="navbar-title">Entry <sup>™</sup></div>
      </Link>
      
      <div className="navbar-icons">
        <Link to="/" className="navbar-home">
          <FaHome /> Home
        </Link>
        <Link to="/wip" className="navbar-search">
          <FaSearch /> Search
        </Link>
        <Link to="/wip" className="navbar-list">
          <FaList />List
        </Link>

        {currentUser && (
          <Link to={`/profile/${currentUser.uid}`} className="navbar-list">Profile</Link>
        )}

        <div className="navbar-login">
          {currentUser ? (
            <button onClick={handleLogout} className="navbar-login-link">
              <FaUser /> Logout
            </button>
          ) : (
            <Link to="/signin" className="navbar-login-link">
              <FaUser /> Login
            </Link>
          )}
        </div>
      </div>
      <div className="hamburger-icon" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
          <div className="close-icon" onClick={toggleSidebar}>
            <FaTimes />
          </div>
          <Link to="/" className="sidebar-link" onClick={toggleSidebar}>Home</Link>
          <Link to="/wip" className="sidebar-link" onClick={toggleSidebar}>Search</Link>
          <Link to="/wip" className="sidebar-link" onClick={toggleSidebar}>List</Link>
          {currentUser ? (
            <button onClick={handleLogout} className="sidebar-link">
              Logout
            </button>
          ) : (
            <Link to="/signin" className="sidebar-link" onClick={toggleSidebar}>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
