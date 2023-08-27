import { createSlice } from "@reduxjs/toolkit";

interface animateObjectSliceState {
  key: number;
  className: string;
  keyframes: string;
}

const initialState: animateObjectSliceState = {
  key: 0,
  className: "",
  keyframes: "",
};

export const animationObjectSlice = createSlice({
  name: "animatedObjectSlice",
  initialState: initialState,
  reducers: {
    remountKey: (state) => {
      state.key = state.key + 1;
    },
    setClassname: (state, action) => {
      state.className = action.payload;
    },
    setKeyframes: (state, action) => {
      state.keyframes = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { remountKey, setClassname, setKeyframes } =
  animationObjectSlice.actions;

export default animationObjectSlice.reducer;
