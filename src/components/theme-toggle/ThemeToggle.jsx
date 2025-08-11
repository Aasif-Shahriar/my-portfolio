import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="border-2 border-frame-6 dark:border-frame-4 px-3 py-1.5 rounded-md bg-frame-7 cursor-pointer dark:bg-frame-3 text-sm"
    >
      {theme === "dark" ? (
        <p className="flex items-center gap-2">
          Light <BsFillSunFill />
        </p>
      ) : (
        <p className="flex items-center gap-2">
          Dark
          <BsMoonStarsFill />
        </p>
      )}
    </button>
  );
};

export default ThemeToggle;
