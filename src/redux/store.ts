import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice"
import settingsReducer from "./settingsSlice"
import clearTextReducer from "./clearTextSlice"

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    settings: settingsReducer,
    clearText: clearTextReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
