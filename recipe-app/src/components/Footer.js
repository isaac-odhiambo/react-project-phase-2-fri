// src/components/Footer.js
import React from 'react';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>We provide the best recipes for your culinary adventures.</p>
          </div>
          <div className="footer-section">
            <h4>Contact Information</h4>
            <p>Email: info@recipeapp.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 RecipeApp. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
