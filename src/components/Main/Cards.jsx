import React from "react";
import writing from "../Res/Images/writing.png";
import file from "../Res/Images/file.png";
import form from "../Res/Images/form.png";
import team from "../Res/Images/team.png";
import sign from "../Res/Images/sign.png";

const Cards = () => {
  const data = [
    {
      header: "E-Signing",
      icon: sign,
      body: "Lorem ipsum dolor sit amet consectetur. Sed orci at posuere posuere at mi quis aliquam et. Mauris fermentum at",
    },
    {
      header: "Hand Writing",
      icon: writing,
      body: "Lorem ipsum dolor sit amet consectetur. Sed orci at posuere posuere at mi quis aliquam et. Mauris fermentum at",
    },
    {
      header: "File Management",
      icon: file,
      body: "Lorem ipsum dolor sit amet consectetur. Sed orci at posuere posuere at mi quis aliquam et. Mauris fermentum at",
    },
    {
      header: "Form Management",
      icon: form,
      body: "Lorem ipsum dolor sit amet consectetur. Sed orci at posuere posuere at mi quis aliquam et. Mauris fermentum at",
    },
    {
      header: "Team Management",
      icon: team,
      body: "Lorem ipsum dolor sit amet consectetur. Sed orci at posuere posuere at mi quis aliquam et. Mauris fermentum at",
    },
  ];
  return (
    <>
      <div className="cards-wrapper">
        <div className="card-flexer">
          <Card icon={data[0].icon} head={data[0].header} body={data[0].body} />
          <Card icon={data[1].icon} head={data[1].header} body={data[1].body} />
          <Card icon={data[2].icon} head={data[2].header} body={data[2].body} />
        </div>
        <div className="card-flexer">
          <Card icon={data[3].icon} head={data[3].header} body={data[3].body} />
          <Card icon={data[4].icon} head={data[4].header} body={data[4].body} />
        </div>
      </div>
    </>
  );
};

const Card = ({ icon, head, body }) => {
  return (
    <>
      <div className={"card"}>
      <div className="mobile-icon">  <img src={icon} alt="gallery" width={30} height={30} /></div>
      <div className="desktop-icon">  <img src={icon} alt="gallery" width={50} height={50} /></div>
        <div style={{paddingLeft: "10px"}}>
          <div className="card-header">{head}</div>
          <div className={"card-body"}>{body}</div>
        </div>
      </div>
    </>
  );
};

export default Cards;
