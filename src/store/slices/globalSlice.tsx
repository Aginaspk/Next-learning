import { createSlice } from "@reduxjs/toolkit";

type Global = {
  theme: "dark" | "light";
};

const INITIAL_STATE: Global = {
  theme: "light",
};

const globalSlice = createSlice({
  name: "global",
  initialState: INITIAL_STATE,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = globalSlice.actions;
export default globalSlice.reducer;
