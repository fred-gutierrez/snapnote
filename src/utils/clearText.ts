import { useContext } from "react";
import { ClearTextContext } from "../context/ClearTextProvider";

export const useClearText = () => {
  const clearTextContext = useContext(ClearTextContext);
  if (!clearTextContext) {
    throw new Error("useClearText must be used within a ClearTextProvider");
  }

  return clearTextContext;
};
