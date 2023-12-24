import { PropsWithChildren, createContext, useEffect, useState } from "react";

interface ClearTextContextType {
  isClearText: boolean;
  setIsClearText: (isClearText: boolean) => void;
}

export const ClearTextContext = createContext<ClearTextContextType | null>(
  null,
);

export const ClearTextProvider: React.FC<PropsWithChildren> = ({
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
