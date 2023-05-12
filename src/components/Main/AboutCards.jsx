import React from "react";
import one from "../Res/Images/one.svg";
import two from "../Res/Images/two.svg";
import three from "../Res/Images/three.svg";
import four from "../Res/Images/four.svg";
import five from "../Res/Images/five.svg";
import six from "../Res/Images/six.svg";

const AboutCard = () => {
  const data = [
    {
      bg: "#FF597599",
      icon: one,
      head: "People Trust Us",
      text: "Lorem ipsum dolor sit amet consectetur. In donec suspendisse ultricies id tortor purus mauris. ",
    },
    {
      bg: "#F7B50099",
      icon: two,
      head: "Businesses Trust Us",
      text: "Lorem ipsum dolor sit amet consectetur. In donec suspendisse ultricies id tortor purus mauris. ",
    },
    {
      bg: "#0061FF99",
      icon: three,
      head: "Our Partners Trust Us",
      text: "Lorem ipsum dolor sit amet consectetur. In donec suspendisse ultricies id tortor purus mauris. ",
    },
    {
      bg: "#B3CCFF",
      icon: four,
      head: "24/7 Customer Support",
      text: "Lorem ipsum dolor sit amet consectetur. In donec suspendisse ultricies id tortor purus mauris. ",
    },
    {
      bg: "#81E650B2",
      icon: five,
      head: "Encryption",
      text: "Lorem ipsum dolor sit amet consectetur. In donec suspendisse ultricies id tortor purus mauris. ",
    },
    {
      bg: "#E7636EB2",
      icon: six,
      head: "Security Standards",
      text: "Lorem ipsum dolor sit amet consectetur. In donec suspendisse ultricies id tortor purus mauris. ",
    },
  ];

  return (
    <>
      <div className="about-wrapper">
        {data.map((datum, id) => (
          <Card
            key={id}
            bg={datum.bg}
            icon={datum.icon}
            head={datum.head}
            text={datum.text}
          />
        ))}
      </div>
    </>
  );
};

const Card = ({ bg, icon, head, text }) => {
  return (
    <>
      <div className="about-card" style={{ backgroundColor: bg }}>
        <img src={icon} alt="about-img" />
        <div className="about-head">{head}</div>
        <div className="about-text">{text}</div>
      </div>
    </>
  );
};

export default AboutCard;
