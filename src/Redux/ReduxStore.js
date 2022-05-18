import { configureStore } from "@reduxjs/toolkit";
import Counter from "../Counter/Counter";
import Theme from "../Theme/Theme";
export const store = configureStore({
  reducer: {
    counter: Counter,
    theme: Theme,
  },
});
