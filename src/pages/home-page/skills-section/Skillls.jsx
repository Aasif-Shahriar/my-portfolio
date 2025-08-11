import React, { useEffect, useState } from "react";
import GradientBar from "../../../components/navbar/GradientBar";
import axios from "axios";
import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAxios,
  SiReactquery,
  SiGithub,
  SiFramer,
  SiReacthookform,
} from "react-icons/si";

const Skillls = () => {
  const iconMap = {
    SiHtml5,
    SiTailwindcss,
    SiJavascript,
    SiReact,
    SiFirebase,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiAxios,
    SiReactquery,
    SiGithub,
    SiFramer,
    SiReacthookform,
  };
  const [skills, setSkills] = useState([]);
  console.log(skills);

  useEffect(() => {
    axios
      .get("/skills.json")
      .then((res) => setSkills(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section
      id="skills"
      className="bg-frame-8 text-frame-2 dark:bg-frame-2 dark:text-frame-9"
    >
      <div className="section-styles">
        {/* top content */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="section-title">Skills & Tools</h1>
          <GradientBar />
          <p className="section-sub-title">
            My technical arsenal for building modern, scalable web applications
          </p>
        </div>

        {/* skills card */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-8">
          {skills.map(({ icon, skill, color }) => {
            const IconComponent = iconMap[icon];
            return (
              <div key={skill} className="flex flex-col items-center gap-2">
                {IconComponent && <IconComponent color={color} size={48} />}
                <span className="text-center text-sm font-semibold">
                  {skill}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skillls;
