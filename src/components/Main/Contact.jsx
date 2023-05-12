import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const payload= {
    firstname, lastname, email, message
  }

  const sendMail = () => {
    console.log(payload)
    axios
      .post(`https://trek-api.onrender.com/email/send`, payload)
      .then((res) => {
        alert("Email sent successfully")
      })
      .catch((error) => {
        alert(error.response.data.data);
      });
  };
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
              <input
                type="text"
                className="input"
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flexer">
            <div className="label">Last Name</div>
            <div>
              <input
                type="text"
                className="input"
                value={lastname}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="label">Email Address</div>
        <div>
          <input
            type="text"
            className="input-long"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="label">Message</div>
        <div>
          <textarea
            type="text"
            className="input-textarea"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>
        <div
          className="contact-btn"
          onClick={() => {
            sendMail();
          }}
        >
          Contact Us
        </div>
      </div>
    </>
  );
};

export default Contact;
