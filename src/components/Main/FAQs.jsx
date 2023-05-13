import React, { useState } from "react";
import plus from "../Res/Images/plus_btn.png";

const FAQs = () => {
  const [toggle, setToggle] = useState(Boolean);
  const [toggle1, setToggle1] = useState(Boolean);
  const [toggle2, setToggle2] = useState(Boolean);
  return (
    <>
      <br />
      <br />
      <br />
      <div
        className="faq-wrapper"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div className="flex">
          <div className="faq-text">
            Lorem ipsum dolor sit amet consectetur ?
          </div>
          <img src={plus} alt="faq-icon" />
        </div>
      </div>
      {toggle === true && (
        <div className="faq-details">
          Lorem ipsum dolor sit amet consectetur. Sed orci at posuere posuere at
          mi quis aliquam et. Mauris fermentum at sapien congue libero tempus
          sed. Suscipit leo a tempor lobortis.
        </div>
      )}
      <div
        className="faq-wrapper"
        onClick={() => {
          setToggle1(!toggle1);
        }}
      >
        <div className="flex">
          <div className="faq-text">
            Lorem ipsum dolor sit amet consectetur ?
          </div>
          <img src={plus} alt="faq-icon" />
        </div>
      </div>
      {toggle1 === true && (
        <div className="faq-details">
          Lorem ipsum dolor sit amet consectetur. Sed orci at posuere posuere at
          mi quis aliquam et. Mauris fermentum at sapien congue libero tempus
          sed. Suscipit leo a tempor lobortis.
        </div>
      )}
      <div
        className="faq-wrapper"
        onClick={() => {
          setToggle2(!toggle2);
        }}
      >
        <div className="flex">
          <div className="faq-text">
            Lorem ipsum dolor sit amet consectetur ?
          </div>
          <img src={plus} alt="faq-icon" />
        </div>
      </div>
      {toggle2 === true && (
        <div className="faq-details">
          Lorem ipsum dolor sit amet consectetur. Sed orci at posuere posuere at
          mi quis aliquam et. Mauris fermentum at sapien congue libero tempus
          sed. Suscipit leo a tempor lobortis.
        </div>
      )}
    </>
  );
};

export default FAQs;
