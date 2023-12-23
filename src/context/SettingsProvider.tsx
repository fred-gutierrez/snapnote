import {
  ReactNode,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";

interface SettingsContextType {
  hideExport: boolean;
  setHideExport: (hideExport: boolean) => void;

  hideCopy: boolean;
  setHideCopy: (hideCopy: boolean) => void;
}

const SettingsContext = createContext<SettingsContextType | null>(null);

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
  children,
}) => {
  const [hideExport, setHideExport] = useState<boolean>(false);
  const [hideCopy, setHideCopy] =
    useState<boolean>(false);

  useEffect(() => {
    const isHideExportStored =
      localStorage.getItem("hideExport");
    const initialHideExport =
      isHideExportStored === "true" || false;

    const isHideCopyStored = localStorage.getItem(
      "hideCopy",
    );
    const initialHideCopy =
      isHideCopyStored === "true" || false;

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

export const useHideExport = () => {
  const hideExportContext = useContext(SettingsContext);
  if (!hideExportContext) {
    throw new Error(
      "useHideExport must be used within a SettingsProvider",
    );
  }
  return hideExportContext;
};

export const useHideCopy = () => {
  const hideCopyContext = useContext(SettingsContext);
  if (!hideCopyContext) {
    throw new Error(
      "useHideExport must be used within a SettingsProvider",
    );
  }
  return hideCopyContext;
};

export default SettingsProvider;
