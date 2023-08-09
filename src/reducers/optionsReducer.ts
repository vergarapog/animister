import { createSlice } from "@reduxjs/toolkit";

interface OptionsSliceState {
  objectType: "box" | "circle";
  duration: string;
}

const initialState: OptionsSliceState = {
  objectType: "box",
  duration: "1",
};

export const selectedAnimationSlice = createSlice({
  name: "selectedAnimation",
  initialState: initialState,
  reducers: {
    setObjectType: (state, action) => {
      state.objectType = action.payload;
    },
    setDuration: (state, action) => {
      state.objectType = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setObjectType, setDuration } = selectedAnimationSlice.actions;

export default selectedAnimationSlice.reducer;
