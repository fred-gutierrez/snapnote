import {
  ReactNode,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";

interface SettingsContextType {
  hideExportMenu: boolean;
  setHideExportMenu: (hideExportMenu: boolean) => void;

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
  const [hideExportMenu, setHideExportMenu] = useState<boolean>(false);
  const [hideCopy, setHideCopy] =
    useState<boolean>(false);

  useEffect(() => {
    const isHideExportMenuStored =
      localStorage.getItem("hideExportMenu");
    const initialHideExportMenu =
      isHideExportMenuStored === "true" || false;

    const isHideCopyStored = localStorage.getItem(
      "hideCopy",
    );
    const initialHideCopy =
      isHideCopyStored === "true" || false;

    setHideExportMenu(initialHideExportMenu);
    setHideCopy(initialHideCopy);
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        hideExportMenu,
        setHideExportMenu,
        hideCopy,
        setHideCopy,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useHideExportMenu = () => {
  const hideExportMenuContext = useContext(SettingsContext);
  if (!hideExportMenuContext) {
    throw new Error(
      "useHideExportMenu must be used within a SettingsProvider",
    );
  }
  return hideExportMenuContext;
};

export const useHideCopy = () => {
  const hideCopyContext = useContext(SettingsContext);
  if (!hideCopyContext) {
    throw new Error(
      "useHideExportMenu must be used within a SettingsProvider",
    );
  }
  return hideCopyContext;
};

export default SettingsProvider;
