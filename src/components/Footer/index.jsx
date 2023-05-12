import React from "react";
import foot_logo from "../Res/Images/desktop-logo.png";

const Footer = () => {
  const getFullYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
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
            <div className="footer-small-text">Home</div>
            <div className="footer-small-text">About</div>
            <div className="footer-small-text">Contact Us</div>
          </div>
          <div className="footer-flex">
            <div className="footer-big-text">Support & Legal</div>
            <div className="footer-small-text">Support</div>
            <div className="footer-small-text">Cookie Policy</div>
            <div className="footer-small-text">Privacy Policy</div>
          </div>
          <div className="footer-flex">
            <div className="footer-big-text">Get In Touch</div>
            <div className="footer-small-text"> 08107492331</div>
            <div className="footer-small-text">ajaniben123456@gmail.com</div>
            <div className="footer-big-text">Social Media</div>
            <div className="footer-small-text"></div>
          </div>
        </div>
        <div className="footer-copy">© TekNotes {getFullYear()}</div>
      </div>
    </>
  );
};

export default Footer;
