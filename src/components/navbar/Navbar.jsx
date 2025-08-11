import React, { useState } from "react";
import ThemeToggle from "../theme-toggle/ThemeToggle";
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-scroll";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import ResumeButton from "./ResumeButton";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
];
const Navbar = () => {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleMobileClick = () => {
    setMobileIsOpen(false);
  };

  return (
    <>
      <nav className="bg-frame-9 dark:bg-frame-1 text-frame-1 dark:text-frame-9 sticky top-0 left-0 z-50">
        {/* desktop view navbar */}
        <div className="max-w-[1440px] mx-auto px-4 h-16 flex items-center justify-between">
          {/* nav links */}
          <ul className="hidden lg:flex items-center gap-5">
            {navLinks.map(({ id, label }) => (
              <Link
                key={id}
                to={id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                className={`relative pb-1 cursor-pointer transform ${
                  activeSection === id ? "scale-105" : ""
                } transition duration-300`}
                onSetActive={() => setActiveSection(id)}
              >
                <span
                  className={`text-sm  ${
                    activeSection === id
                      ? "text-frame-1 dark:text-frame-9"
                      : "text-frame-4 dark:text-frame-6"
                  }`}
                >
                  {label}
                </span>
                {/* on hover: border-b */}
                <span
                  className={`absolute  bottom-0 left-0 h-0.5 bg-frame-1 dark:bg-frame-9 transition-all duration-300 ${
                    activeSection === id ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>
            ))}
          </ul>
          {/* logo */}
          <h2 className="text-2xl font-bold">
            Asif <span className="dark:text-frame-7 text-frame-3">Azad</span>
          </h2>
          {/* social links + theme btn + resume btn */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-4">
              <ul className="flex items-center gap-3">
                <li className="text-frame-3 hover:text-frame-1 dark:text-frame-6 dark:hover:text-frame-9 text-xl transform hover:scale-110 transition duration-300">
                  <a href="https://github.com/Aasif-Shahriar" target="_blank">
                    <FiGithub />
                  </a>
                </li>
                <li className="text-frame-3 hover:text-blue-500 dark:text-frame-6  text-xl transform hover:scale-110 transition duration-300">
                  <a
                    href="https://www.linkedin.com/in/asif-shahriar01"
                    target="_blank"
                  >
                    <FiLinkedin />
                  </a>
                </li>
                <li className="text-frame-3 hover:text-frame-1 dark:text-frame-6 dark:hover:text-frame-9 text-xl transform hover:scale-110 transition duration-300">
                  <a href="https://x.com/Asif_Al_Azad201" target="_blank">
                    <FaXTwitter />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ThemeToggle />
            </div>
            <div>
              <ResumeButton />
            </div>
          </div>

          {/* mobile menu button */}
          <div className=" lg:hidden">
            <button onClick={() => setMobileIsOpen(!mobileIsOpen)}>
              {mobileIsOpen ? (
                <VscChromeClose size={20} />
              ) : (
                <LiaBarsSolid size={20} />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* mobile view navbar */}
      <AnimatePresence>
        {mobileIsOpen && (
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-16 left-0 w-full h-[calc(100vh-64px)] z-50 bg-frame-9/80 dark:bg-frame-1/80 backdrop-blur-md text-frame-1 dark:text-frame-9"
          >
            <div className="w-full h-full flex flex-col justify-center items-center py-10 space-y-10">
              <ul className="flex flex-col gap-6">
                {navLinks.map(({ id, label }) => (
                  <Link
                    key={id}
                    to={id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className={`cursor-pointer transform ${
                      activeSection === id ? "scale-105" : ""
                    } transition duration-300`}
                    onSetActive={() => setActiveSection(id)}
                  >
                    <span
                      className={`text-xl font-semibold ${
                        activeSection === id
                          ? "text-frame-1 dark:text-frame-9"
                          : "text-frame-3 dark:text-frame-4"
                      }`}
                    >
                      {label}
                    </span>
                  </Link>
                ))}
              </ul>

              <ul className="flex items-center justify-center gap-3">
                <li className="text-frame-5 hover:text-frame-1 dark:text-frame-4 dark:hover:text-frame-9 text-xl transform hover:scale-110 transition duration-300">
                  <a href="https://github.com/Aasif-Shahriar" target="_blank">
                    <FiGithub />
                  </a>
                </li>
                <li className="text-frame-5 hover:text-blue-500 dark:text-frame-4 dark:hover:text-blue-400 text-xl transform hover:scale-110 transition duration-300">
                  <a
                    href="https://www.linkedin.com/in/asif-shahriar01"
                    target="_blank"
                  >
                    <FiLinkedin />
                  </a>
                </li>
                <li className="text-frame-5 hover:text-frame-1 dark:text-frame-4 dark:hover:text-frame-9 text-xl transform hover:scale-110 transition duration-300">
                  <a href="https://x.com/Asif_Al_Azad201" target="_blank">
                    <FaXTwitter />
                  </a>
                </li>
              </ul>

              <ThemeToggle />
              <div className="flex items-center justify-center">
                <ResumeButton />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
