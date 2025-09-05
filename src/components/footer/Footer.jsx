import React from "react";

const Footer = () => {
  return (
    <footer className="bg-frame-8 dark:bg-frame-2 text-frame-1 dark:text-frame-9 py-5 px-4 flex items-center justify-center space-x-4">
      <p>
        <small>© 2025 Asif Shahriar. All rights reserved.</small>
      </p>

      {/* Vertical divider */}
      <div className="w-px h-5 bg-frame-4"></div>

      <p>
        <small>Designed for impact, coded with passion ⚡</small>
      </p>
    </footer>
  );
};

export default Footer;
