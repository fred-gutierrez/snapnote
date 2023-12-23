import { useContext } from "react";
import { SettingsContext } from "../context/SettingsProvider";

export const useHideCopy = () => {
  const hideCopyContext = useContext(SettingsContext);
  if (!hideCopyContext) {
    throw new Error("useHideExport must be used within a SettingsProvider");
  }
  return hideCopyContext;
};
