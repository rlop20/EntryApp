import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2024 Entry, Powered by &copy; Twen Studios</p>

      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/code-of-conduct">Code of Conduct</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/copyright-policy">Copyright Policy</a>
      </div>
    </div>
  );
}

export default Footer;
