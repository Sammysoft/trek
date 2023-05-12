import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <img src="./assets/desktop-logo.png" alt="logo-desktop" />
        </div>
        <div className="navbar-items">
            <div className="navbar-item">Home</div>
            <div className="navbar-item">About Us</div>
            <div className="navbar-item">FAQs</div>
            <div className="navbar-item">Contact</div>
        </div>
        <div className="navbar-btn">
            Download
        </div>
      </div>
    </>
  );
};

export default NavBar;
