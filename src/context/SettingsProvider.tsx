import { createContext, ReactNode, useEffect, useState } from "react";

interface SettingsContextType {
  hideExport: boolean;
  setHideExport: (hideExport: boolean) => void;

  hideCopy: boolean;
  setHideCopy: (hideCopy: boolean) => void;
}

export const SettingsContext = createContext<SettingsContextType | null>(null);

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
  children,
}) => {
  const [hideExport, setHideExport] = useState<boolean>(false);
  const [hideCopy, setHideCopy] = useState<boolean>(false);

  useEffect(() => {
    const isHideExportStored = localStorage.getItem("hideExport");
    const initialHideExport = isHideExportStored === "true" || false;

    const isHideCopyStored = localStorage.getItem("hideCopy");
    const initialHideCopy = isHideCopyStored === "true" || false;

    setHideExport(initialHideExport);
    setHideCopy(initialHideCopy);
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        hideExport,
        setHideExport,
        hideCopy,
        setHideCopy,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
