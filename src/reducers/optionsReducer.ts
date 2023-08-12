import { createSlice } from "@reduxjs/toolkit";

interface OptionsSliceState {
  objectType: "box" | "circle";
  duration: string;
  timingFunction: string;
  delay: string;
  iterationCount: string;
  direction: string;
  fillMode: string;
}

const initialState: OptionsSliceState = {
  objectType: "box",
  duration: "0.4",
  timingFunction: "ease",
  delay: "0",
  iterationCount: "1",
  direction: "normal",
  fillMode: "forwards",
};

export const selectedAnimationSlice = createSlice({
  name: "selectedAnimation",
  initialState: initialState,
  reducers: {
    setObjectType: (state, action) => {
      state.objectType = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setTimingFunction: (state, action) => {
      state.timingFunction = action.payload;
    },
    setDelay: (state, action) => {
      state.delay = action.payload;
    },
    setIterationCount: (state, action) => {
      state.iterationCount = action.payload;
    },
    setDirection: (state, action) => {
      state.direction = action.payload;
    },
    setFillMode: (state, action) => {
      state.fillMode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setObjectType,
  setDuration,
  setTimingFunction,
  setDelay,
  setIterationCount,
  setDirection,
  setFillMode,
} = selectedAnimationSlice.actions;

export default selectedAnimationSlice.reducer;
