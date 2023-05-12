import React from "react";
import foot_logo from "../Res/Images/desktop-logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-flex-wrapper">
          <div className="footer-flex">
            <img src={foot_logo} alt="foot-logo" />
            <div
              style={{
                color: "white",
                paddingLeft: "10px",
                fontSize: 12,
                fontFamily: "Poppins",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget.
            </div>
          </div>
          <div className="footer-flex">
            <div className="footer-big-text">Quick Links</div>
          </div>
          <div className="footer-flex">
            <div className="footer-big-text">Support & Legal</div>
          </div>
          <div className="footer-flex">
            <div className="footer-big-text">Get In Touch</div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Footer;
