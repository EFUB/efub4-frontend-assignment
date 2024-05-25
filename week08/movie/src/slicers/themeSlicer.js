import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "../Theme";

const initialState = {
  theme: darkTheme,
};

const themeSlice = createSlice({
  name: "themeSlicer",
  initialState: initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme.mode === "dark" ? lightTheme : darkTheme;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
