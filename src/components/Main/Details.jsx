import React from "react";
import phone1 from "../Res/Images/phone1.png";
import phone2 from "../Res/Images/phone2.png";
import phone3 from "../Res/Images/phone3.png";

const Details = () => {
  const data = [
    {
      image: phone1,
      textHead: "Digital Signatures Made Easy",
      textBody: `Lorem ipsum dolor sit amet consectetur. Sed eget enim nisi netus iaculis. Diam mauris lobortis aliquam euismod bibendum
        morbi bibendum eu. Lacinia nisi enim tempor suscipit nunc quis dolor duis. Ac lacus turpis lobortis id accumsan feugiat amet. Diam tincidunt auctor
        posuere convallis tincidunt augue eu. Et eu nunc dictumst volutpat suscipit pharetra lectus. Eu pulvinar volutpat lectus pulvinar.
        Massa tellus etiam orci diam enim lectus diam. Eu luctus nunc mus vulputate nunc et dui donec.`,
    },
    {
      image: phone2,
      textHead: "Work Directly on Your Files",
      textBody: `Lorem ipsum dolor sit amet consectetur. Sed eget enim nisi netus iaculis. Diam mauris lobortis aliquam euismod bibendum
        morbi bibendum eu. Lacinia nisi enim tempor suscipit nunc quis dolor duis. Ac lacus turpis lobortis id accumsan feugiat amet. Diam tincidunt auctor
        posuere convallis tincidunt augue eu. Et eu nunc dictumst volutpat suscipit pharetra lectus. Eu pulvinar volutpat lectus pulvinar.
        Massa tellus etiam orci diam enim lectus diam. Eu luctus nunc mus vulputate nunc et dui donec.`,
    },
    {
      image: phone3,
      textHead: "Access Management",
      textBody: `Lorem ipsum dolor sit amet consectetur. Sed eget enim nisi netus iaculis. Diam mauris lobortis aliquam euismod bibendum
        morbi bibendum eu. Lacinia nisi enim tempor suscipit nunc quis dolor duis. Ac lacus turpis lobortis id accumsan feugiat amet. Diam tincidunt auctor
        posuere convallis tincidunt augue eu. Et eu nunc dictumst volutpat suscipit pharetra lectus. Eu pulvinar volutpat lectus pulvinar.
        Massa tellus etiam orci diam enim lectus diam. Eu luctus nunc mus vulputate nunc et dui donec.`,
    },
  ];
  return (
    <>
      <div className="details-wrapper">
        <div className={"flexer"}>
          <Image image={data[0].image} />
        </div>
        <div className={"flexer pusher"}>
          <Text textHead={data[0].textHead} textBody={data[0].textBody} />
        </div>
      </div>
      <div className="details-wrapper">
        <div  className={"flexer"}>
          <Text textHead={data[1].textHead} textBody={data[1].textBody} />
        </div>
        <div className={"flexer pusher"}>
          <Image image={data[1].image} />
        </div>
      </div>
      <div className="details-wrapper">
        <div className={"flexer"}>
          <Image image={data[2].image} />
        </div>
        <div className={"flexer pusher"}>
          <Text textHead={data[2].textHead} textBody={data[2].textBody} />
        </div>
      </div>
    </>
  );
};

const Image = ({ image }) => {
  return (
    <>
      <img src={image} alt="phone" width={"70%"} height={"70%"}/>
    </>
  );
};

const Text = ({ textHead, textBody }) => {
  return (
    <>
      <div className={"details-big-text"}>{textHead}</div>
      <div className={"details-small-text"}>{textBody}</div>
    </>
  );
};

export default Details;
