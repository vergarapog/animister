import { Dispatch, createSlice } from "@reduxjs/toolkit";
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
    setAnimations: (state, action) => {
      return action.payload;
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
    const countries = await animationsService.getAll();
    dispatch(setAnimations(countries));
  };
};

export default animationsSlice.reducer;
