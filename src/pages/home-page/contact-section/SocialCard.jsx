import React from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const SocialCard = () => {
  const contactInfo = [
    {
      icon: <MdOutlineEmail />,
      label: "Email",
      value: "asifshahriar247@gmail.com",
      href: "mailto:asifshahriar247@gmail.com",
      // color: "hover:text-blue-400",
    },
    {
      icon: <IoCallOutline />,
      label: "Phone",
      value: "(+88) 01868-381701",
      href: "tel:+8801838381701",
      // color: "hover:text-green-400",
    },
    {
      icon: <IoLocationOutline />,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
      // color: "hover:text-red-400",
    },
  ];
  const socialLinks = [
    {
      icon: <FiGithub />,
      href: "https://github.com/Aasif-Shahriar",
      label: "GitHub",
      color: "dark:hover:text-frame-7 hover:text-frame-3",
    },
    {
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/in/asif-shahriar01",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaXTwitter />,
      href: "https://x.com/asif_shahriar1",
      label: "LinkedIn",
      color: "hover:text-frame-4 dark:hover:text-frame-6",
    },
  ];

  return (
    <motion.div
      className="lg:col-span-2 space-y-12"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Contact Methods */}
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-frame-1 dark:text-frame-9 mb-6">
          Get In Touch
        </h3>
        {contactInfo.map((info, index) => {
          return (
            <motion.a
              key={info.label}
              href={info.href}
              className={`group flex items-center gap-4 p-4 bg-frame-8/50 dark:bg-frame-2/50 backdrop-blur-sm rounded-xl border border-frame-7/50 dark:border-frame-3/50 hover:border-frame-6/50 dark:hover:border-frame-4/50 transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 5, scale: 1.02 }}
            >
              <div className="p-3 bg-frame-7/50 dark:bg-frame-3/50 rounded-lg group-hover:bg-frame-6/50 dark:group-hover:bg-frame-4/50 transition-colors duration-300">
                <span className="w-5 h-5 text-frame-3 dark:text-frame-7">
                  {info.icon}
                </span>
              </div>
              <div>
                <h4 className="text-frame-2 dark:text-frame-8 font-medium">
                  {info.label}
                </h4>
                <p className="text-frame-4 dark:text-frame-6 text-sm">
                  {info.value}
                </p>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-xl font-semibold text-frame-1 dark:text-frame-9 mb-6">
          Follow Me
        </h3>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => {
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-frame-8/50 dark:bg-frame-2/50 backdrop-blur-sm rounded-xl border border-frame-7/50 dark:border-frame-3/50 hover:border-frame-6/50 dark:hover:border-frame-4/50 text-frame-4 dark:text-frame-6 transition-all duration-300 ${social.color}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="w-6 h-6">{social.icon}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default SocialCard;
