import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AnimationCategories } from "../types";
import animationsService from "../services/animations";

interface animationsSliceState {
  animations: AnimationCategories[];
}

const initialState: animationsSliceState = {
  animations: [],
};

export const animationsSlice = createSlice({
  name: "selectedAnimation",
  initialState: initialState,
  reducers: {
    setAnimations: (state, action: PayloadAction<AnimationCategories[]>) => {
      state.animations = action.payload;
    },

    clearAnimations: (state, action) => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAnimations, clearAnimations } = animationsSlice.actions;

export const initializeAnimations = () => {
  return async (dispatch: Dispatch) => {
    const animations = await animationsService.getAll();
    dispatch(setAnimations(animations));
  };
};

export default animationsSlice.reducer;
