import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const ResumeButton = () => {
  return (
    <a
      href="/Asif_Azad_Resume.pdf"
      download="Asif_Azad_Resume.pdf"
      className="flex items-center gap-2 bg-frame-7 dark:bg-frame-3 px-3 py-1.5 rounded-lg"
    >
      <MdOutlineFileDownload size={20} /> Resume
    </a>
  );
};

export default ResumeButton;
