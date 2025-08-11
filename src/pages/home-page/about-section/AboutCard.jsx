import React from "react";
import { BsLightningCharge } from "react-icons/bs";
import { FaLaptop } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { IoCode } from "react-icons/io5";

const AboutCard = () => {
  const cardInfo = [
    {
      icon: <IoCode />,
      skill: "Frontend Development",
      info: "Creating responsive, interactive user interfaces with React and modern CSS",
    },
    {
      icon: <GoDatabase />,
      skill: "Backend Architecture",
      info: "Building scalable APIs and database solutions with Node.js and MongoDB",
    },
    {
      icon: <FaLaptop />,
      skill: "Full Stack Integration",
      info: "Seamlessly connecting frontend and backend for complete web applications",
    },
    {
      icon: <BsLightningCharge />,
      skill: "Performance Optimization",
      info: "Ensuring fast, efficient applications with best practices and modern tools",
    },
  ];
  return (
    <>
      {cardInfo.map((item, index) => (
        <div key={index} className="border border-frame-5 p-3 flex gap-3 ">
          <div>{item.icon}</div>
          <div>
            <h3>{item.skill}</h3>
            <p>{item.info}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutCard;
