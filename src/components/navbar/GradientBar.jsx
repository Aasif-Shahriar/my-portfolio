import React from "react";
import { motion } from "framer-motion";

const GradientBar = () => {
  return (
    <motion.div
      className="w-20 rounded-full h-1 bg-gradient-to-r from-frame-1 to-frame-7 dark:from-frame-9 dark:to-frame-3"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ transformOrigin: "center" }}
    />
  );
};

export default GradientBar;