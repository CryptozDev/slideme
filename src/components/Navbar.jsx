
/* Navbar adjustments for iPhone 13 Pro mobile view */

import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <button className="menu-icon">☰</button> {/* Menu icon for mobile view */}
      </div>
        <img src="https://img2.pic.in.th/pic/slideme-logo.png" alt="Slide Me Logo" className="navbar-logo" />
      <div className="navbar-right">
        <button className="notification-icon">🔔</button> {/* Notification icon */}
      </div>
    </div>
  );
}

export default Navbar;
