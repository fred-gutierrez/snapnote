import { useContext } from "react";
import { SettingsContext } from "../context/SettingsProvider";

export const useHideExport = () => {
  const hideExportContext = useContext(SettingsContext);
  if (!hideExportContext) {
    throw new Error("useHideExport must be used within a SettingsProvider");
  }
  return hideExportContext;
};
