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
      value: "hello@asifazad.dev",
      href: "mailto:hello@asifazad.dev",
      color: "hover:text-blue-400",
    },
    {
      icon: <IoCallOutline />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "hover:text-green-400",
    },
    {
      icon: <IoLocationOutline />,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
      color: "hover:text-red-400",
    },
  ];
  const socialLinks = [
    {
      icon: <FiGithub />,
      href: "https://github.com/Aasif-Shahriar",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/in/asif-shahriar01",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaXTwitter />,
      href: "https://x.com/Asif_Al_Azad201",
      label: "LinkedIn",
      color: "hover:text-gray-400",
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
        <h3 className="text-2xl font-semibold text-gray-100 mb-6">
          Get In Touch
        </h3>
        {contactInfo.map((info, index) => {
          return (
            <motion.a
              key={info.label}
              href={info.href}
              className={`group flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 ${info.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 5, scale: 1.02 }}
            >
              <div className="p-3 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors duration-300">
                <span className="w-5 h-5 text-gray-300">{info.icon}</span>
              </div>
              <div>
                <h4 className="text-gray-200 font-medium">{info.label}</h4>
                <p className="text-gray-400 text-sm">{info.value}</p>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-xl font-semibold text-gray-100 mb-6">Follow Me</h3>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => {
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600/50 text-gray-400 transition-all duration-300 ${social.color}`}
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
