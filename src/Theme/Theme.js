import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "light",
};
export const Theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    light: (state) => {
      state.value = "light";
    },
    dark: (state) => {
      state.value = "dark";
    },
    silver: (state) => {
      state.value = "silver";
    },
  },
});
export const { light, dark, silver } = Theme.actions;
export default Theme.reducer;
