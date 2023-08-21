import { createSlice } from "@reduxjs/toolkit";

interface animateObjectSliceState {
  key: number;
  class: string;
  keyframes: string;
}

const initialState: animateObjectSliceState = {
  key: 0,
  class: "",
  keyframes: "",
};

export const animationObjectSlice = createSlice({
  name: "animatedObjectSlice",
  initialState: initialState,
  reducers: {
    remountKey: (state) => {
      state.key = state.key + 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { remountKey } = animationObjectSlice.actions;

export default animationObjectSlice.reducer;
