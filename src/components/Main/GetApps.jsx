import React from "react";
import phone from "../Res/Images/phones.png";
import app from "../Res/Images/app.png";
import play from "../Res/Images/play.png";

const GetApps = () => {
  return (
    <>
      <div className="getapp-wrapper">
        <div className="flexer">
          <div className="getapp-text">Get it On Mobile!</div>
          <div className="getapp-small-text">
            Lorem ipsum dolor sit amet consectetur. In donec suspendisse
            ultricies id tortor purus mauris. Ligula molestie sed vivamus odio
          </div>
          <div
          className="full"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "60%",
            }}
          >
            <div>
              <img src={play} width={"150px"} alt="play"/>
            </div>
            <div>
              <img src={app} width={"150px"} alt="app"/>
            </div>
          </div>
        </div>
        <div className="flexer mobile">
          <img
            src={phone}
            alt="isource"
            width={"80%"}
            height={"70%"}
          />
        </div>
      </div>
    </>
  );
};

export default GetApps;
