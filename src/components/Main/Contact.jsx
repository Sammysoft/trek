import React from "react";

const Contact = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="contact-wrapper">
        <div className="flex">
          <div className="flexer">
            <div className="label">First Name</div>
            <div>
              <input type="text" className="input" />
            </div>
          </div>
          <div className="flexer">
            <div className="label">Last Name</div>
            <div>
              <input type="text" className="input" />
            </div>
          </div>
        </div>
        <div className="label">Email Address</div>
        <div>
          <input type="text" className="input-long" />
        </div>
        <div className="label">Message</div>
        <div>
          <textarea type="text" className="input-textarea" >
          </textarea>
        </div>
        <div className="contact-btn">
            Contact Us
        </div>
      </div>
    </>
  );
};

export default Contact;
