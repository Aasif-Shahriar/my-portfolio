import React, { useEffect, useState } from "react";
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
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const socialLinks = [
  {
    id: "github",
    icon: <FiGithub />,
    url: "https://github.com/Aasif-Shahriar",
    hoverColor: "text-frame-1 dark:text-frame-9",
  },
  {
    id: "linkedin",
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/asif-shahriar01",
    hoverColor: "hover:text-blue-500 dark:hover:text-blue-400",
  },
  {
    id: "twitter",
    icon: <FaXTwitter />,
    url: "https://x.com/Asif_Al_Azad201",
    hoverColor: "text-frame-1 dark:text-frame-9",
  },
];

const Navbar = () => {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Calculate which section is currently in view
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileClick = () => {
    setMobileIsOpen(false);
  };

  const handleNavLinkClick = () => {
    if (mobileIsOpen) {
      setMobileIsOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-frame-9/80 text-frame-1 dark:bg-frame-1/80 dark:text-frame-9 shadow-sm backdrop-blur-md"
            : "bg-transparent text-frame-1 dark:text-frame-9"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={handleNavLinkClick}
          >
            <motion.h2
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Asif <span className="dark:text-frame-7 text-frame-3">Azad</span>
            </motion.h2>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ id, label }) => (
              <Link
                key={id}
                to={id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                className={`relative pb-1 cursor-pointer transition duration-300`}
                onSetActive={() => setActiveSection(id)}
                onClick={handleNavLinkClick}
              >
                <motion.span
                  className={`text-sm font-medium ${
                    activeSection === id
                      ? "text-frame-1 dark:text-frame-9"
                      : "text-frame-4 dark:text-frame-6"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {label}
                </motion.span>
                {/* Active indicator */}
                <motion.span
                  className={`absolute bottom-0 left-0 h-0.5 bg-frame-1 dark:bg-frame-9`}
                  initial={{ width: 0 }}
                  animate={{ width: activeSection === id ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </Link>
            ))}
          </ul>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ id, icon, url, hoverColor }) => (
                <motion.a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-frame-3 dark:text-frame-6 text-xl ${hoverColor} transition-colors duration-300`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={id}
                >
                  {icon}
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle */}
            <div>
              <ThemeToggle />
            </div>

            {/* Resume Button */}
            <div>
              <ResumeButton />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-frame-1 dark:text-frame-9"
            onClick={() => setMobileIsOpen(!mobileIsOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label={mobileIsOpen ? "Close menu" : "Open menu"}
          >
            {mobileIsOpen ? (
              <VscChromeClose size={24} />
            ) : (
              <LiaBarsSolid size={24} />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileIsOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }} // full height
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-16 left-0 w-full h-[calc(100vh-64px)] z-40 
                 bg-frame-9/70 dark:bg-frame-1/70 
                 text-frame-1 dark:text-frame-9 
                 backdrop-blur-md shadow-lg overflow-hidden"
          >
            <div className="flex flex-col py-6 px-4 space-y-6">
              {/* Mobile Navigation Links */}
              <ul className="flex flex-col gap-4">
                {navLinks.map(({ id, label }) => (
                  <Link
                    key={id}
                    to={id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className={`py-2 px-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeSection === id
                        ? "bg-frame-3 dark:bg-frame-7 text-frame-9 dark:text-frame-1"
                        : "text-frame-3 dark:text-frame-6 hover:bg-frame-2/40 dark:hover:bg-frame-8/40"
                    }`}
                    onSetActive={() => setActiveSection(id)}
                    onClick={handleMobileClick}
                  >
                    <motion.span
                      className="text-lg font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {label}
                    </motion.span>
                  </Link>
                ))}
              </ul>

              <div className="border-t border-frame-4/30 dark:border-frame-6/30 pt-6">
                {/* Mobile Social Links */}
                <ul className="flex justify-center gap-6 mb-6">
                  {socialLinks.map(({ id, icon, url, hoverColor }) => (
                    <motion.a
                      key={id}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-frame-3 dark:text-frame-6 text-xl ${hoverColor} transition-colors duration-300`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={id}
                    >
                      {icon}
                    </motion.a>
                  ))}
                </ul>

                {/* Mobile Theme Toggle & Resume Button */}
                <div className="flex flex-col items-center gap-4">
                  <ThemeToggle />
                  <ResumeButton />
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
