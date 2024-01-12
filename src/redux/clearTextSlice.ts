import { createSlice } from "@reduxjs/toolkit";

export const clearTextSlice = createSlice({
  name: 'clearText',
  initialState: {
    value: localStorage.getItem("isClearText") === "true" ? true : false,
  },
  reducers: {
    toggleClearText: (state) => {
      state.value = !state.value;

      localStorage.setItem("isClearText", state.value.toString());
    }
  }
})

export const { toggleClearText } = clearTextSlice.actions;

export default clearTextSlice.reducer;
