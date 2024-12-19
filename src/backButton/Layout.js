import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Import the arrow icon
import './Layout.css'; // Import styles for the layout

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine if the current path is the home page
  const isHomePage = location.pathname === '/';

  return (
    <div className="layout">
      {!isHomePage && (
        <div className="top-bar">
          <button className="back-button" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Back
          </button>
        </div>
      )}
      {children}
    </div>
  );
};

export default Layout;
