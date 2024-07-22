import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2024 Entry, Powered by &copy; Twen Studios</p>
      <div className="footer-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/code-of-conduct">Code of Conduct</Link>
        <Link to="/terms-of-service">Terms of Service</Link>
      </div>
    </div>
  );
}

export default Footer;
