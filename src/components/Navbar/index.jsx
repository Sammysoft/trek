import React, { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(Boolean);
  return (
    <>
      <div className="navbar">
        <div className="nav-icon">
          <div className="desk-logo">
            <img
              src="./assets/desktop-logo.png"
              alt="logo-desktop"
              width="100%"
              height="100%"
            />
          </div>
          <div className="mobile-logo">
            <img
              src="./assets/foot_logo.svg"
              alt="logo-desktop"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="navbar-items">
          <div className="navbar-item">Home</div>
          <div className="navbar-item">About Us</div>
          <div className="navbar-item">FAQs</div>
          <div className="navbar-item">Contact</div>
        </div>
        <div className="navbar-btn">Download</div>
        {toggle === false && (
          <div
            className="nav-bar"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <img src="./assets/List.svg" alt="nav-icon" />
          </div>
        )}
        {toggle === true && (
          <div
            className="nav-bar"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <img src="./assets/Cancel.svg" alt="nav-icon" />
          </div>
        )}
      </div>
      {toggle === true && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "white",
            display: "flex",
            width: "90%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "space-between",
            height: "35vh",
            top: "10vh",
            left: "5%",
            borderRadius: "20px",
          }}
        >
          <div className="nav-item">Home</div>
          <div className="nav-item">About Us</div>
          <div className="nav-item">FAQs</div>
          <div className="nav-item">Contact</div>
          <div className="nav-btn">Download</div>
        </div>
      )}
    </>
  );
};

export default NavBar;
