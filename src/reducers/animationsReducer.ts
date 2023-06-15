import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AnimationCategories } from "../types";
import animationsService from "../services/animations";
import type { RootState } from "../store";

interface animationsSliceState {
  animations: AnimationCategories[];
}

const initialState: animationsSliceState = {
  animations: [],
};

export const animationsSlice = createSlice({
  name: "animations",
  initialState: initialState,
  reducers: {
    setAnimations: (state, action: PayloadAction<AnimationCategories[]>) => {
      state.animations = action.payload;
    },

    clearAnimations: (state, action) => {
      state.animations = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAnimations, clearAnimations } = animationsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.animations.animations;

export const initializeAnimations = () => {
  return async (dispatch: Dispatch) => {
    const animations = await animationsService.getAll();
    dispatch(setAnimations(animations));
  };
};

export default animationsSlice.reducer;
