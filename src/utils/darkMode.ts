import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeProvider";

export const useDarkMode = () => {
  const darkModeContext = useContext(DarkModeContext);
  if (!darkModeContext) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return darkModeContext;
};
