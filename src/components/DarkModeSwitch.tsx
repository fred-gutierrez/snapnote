import { useEffect } from "react";
import { useDarkMode } from "../utils/darkMode";

interface DarkModeSwitchTypes {
  className: string;
}

const DarkModeSwitch = ({ className }: DarkModeSwitchTypes) => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (typeof window !== "undefined") {
      localStorage.setItem("isDarkMode", newDarkMode.toString());
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className={className}
      >
        {isDarkMode ? (
          <i className="fa-regular fa-space-station-moon-construction fa-xl"></i>
        ) : (
          <i className="fa-sharp fa-regular fa-sun-bright fa-xl"></i>
        )}
      </button>
    </>
  );
};

export default DarkModeSwitch;
