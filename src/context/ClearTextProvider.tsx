import { createContext, useEffect, useState } from "react";

interface ClearTextContextType {
  isClearText: boolean;
  setIsClearText: (isClearText: boolean) => void;
}

export const ClearTextContext = createContext<ClearTextContextType | null>(
  null,
);

interface ClearTextContextProps extends React.PropsWithChildren {}

export const ClearTextProvider: React.FC<ClearTextContextProps> = ({
  children,
}) => {
  const [isClearText, setIsClearText] = useState<boolean>(false);

  useEffect(() => {
    const isClearTextStored = localStorage.getItem("isClearText");
    const initialIsClearText = isClearTextStored === "true" || false;
    setIsClearText(initialIsClearText);
  }, []);

  return (
    <ClearTextContext.Provider value={{ isClearText, setIsClearText }}>
      {children}
    </ClearTextContext.Provider>
  );
};

export default ClearTextProvider;
