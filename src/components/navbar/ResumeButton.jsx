import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const ResumeButton = () => {
  return (
    <a
      href="/Rasedul Rahman Resume.pdf"
      download="Rasedul Rahman Resume.pdf"
      className="flex items-center gap-2 bg-frame-7 dark:bg-frame-3 px-3 py-1.5 rounded-lg transform hover:-translate-y-0.5 transition duration-300 "
    >
      <MdOutlineFileDownload size={20} /> Resume
    </a>
  );
};

export default ResumeButton;
