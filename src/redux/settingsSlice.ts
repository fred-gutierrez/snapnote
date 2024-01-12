import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    hideExport: localStorage.getItem("hideExport") === "true" ? true : false,
    hideCopy: localStorage.getItem("hideCopy") === "true" ? true : false,
  },
  reducers: {
    toggleHideExport: (state) => {
      state.hideExport = !state.hideExport;

      localStorage.setItem("hideExport", state.hideExport.toString());
    },
    toggleHideCopy: (state) => {
      state.hideCopy = !state.hideCopy;

      localStorage.setItem("hideCopy", state.hideCopy.toString());
    }
  }
})

export const { toggleHideExport, toggleHideCopy } = settingsSlice.actions;

export default settingsSlice.reducer;
