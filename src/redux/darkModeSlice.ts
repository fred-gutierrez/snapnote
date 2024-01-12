import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    value: localStorage.getItem("isDarkMode") === "true" ? true : false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.value = !state.value;

      localStorage.setItem("isDarkMode", state.value.toString());
    }
  }
})

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
