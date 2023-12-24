import { PropsWithChildren, createContext, useEffect, useState } from "react";

interface DarkModeContextType {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

export const DarkModeContext = createContext<DarkModeContextType | null>(null);

export const DarkModeProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const isDarkModeStored = localStorage.getItem("isDarkMode");
    const initialIsDarkMode = isDarkModeStored === "true" || false;
    setIsDarkMode(initialIsDarkMode);
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
