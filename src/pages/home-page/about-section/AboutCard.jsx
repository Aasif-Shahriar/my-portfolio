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
        <div
          key={index}
          className="border border-frame-1/15 dark:border-frame-9/15 p-4 flex gap-3 bg-frame-7/50 dark:bg-frame-3/50 rounded-xl"
        >
          <div className="w-10 h-10 bg-frame-7 dark:bg-frame-3 text-frame-2 dark:text-frame-8 shadow-md p-2 rounded-xs flex items-center justify-center">
            <span className="text-xl">{item.icon}</span>
          </div>

          <div>
            <h3 className="text-lg font-medium text-frame-1 dark:text-frame-9">{item.skill}</h3>
            <p className="text-sm text-frame-3 dark:text-frame-7">{item.info}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutCard;
