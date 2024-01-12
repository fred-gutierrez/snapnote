import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/darkModeSlice";
import { AppDispatch, RootState } from "../redux/store";

interface DarkModeSwitchTypes {
  className: string;
}

const DarkModeSwitch = ({ className }: DarkModeSwitchTypes) => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <button
        onClick={() => dispatch(toggleDarkMode())}
        className={className}
      >
        {darkMode ? (
          <i className="fa-regular fa-space-station-moon-construction fa-xl"></i>
        ) : (
          <i className="fa-sharp fa-regular fa-sun-bright fa-xl"></i>
        )}
      </button>
    </>
  );
};

export default DarkModeSwitch;
