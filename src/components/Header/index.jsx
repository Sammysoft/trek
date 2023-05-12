import React from "react";
import phones from "../Res/Images/phones.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="flexer">
          <div className={"header-big-text"}>
            TekNotes Your Number One Document Management App
          </div>
          <div className="header-small-text">
            Lorem ipsum dolor sit amet consectetur. Sed orci at posuere posuere
            at mi quis aliquam et. Mauris fermentum at sapien congue libero
            tempus sed. Suscipit leo a tempor lobortis.
          </div>
          <div className="btn-flexer">
            <div className="navbar-btn">Download</div>
            <div className="navbar-btn">Explore tools</div>
          </div>
        </div>
        <div className="flexer">
          <img src={phones} alt="phones" width={350} height={400} />
        </div>
      </div>
    </>
  );
};

export default Header;
