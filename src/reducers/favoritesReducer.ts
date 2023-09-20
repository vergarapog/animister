import { createSlice } from "@reduxjs/toolkit";
import { AnimationGroup } from "../types";

interface favoritesSliceState {
  favoriteAnimations: AnimationGroup[];
}

const initialState: favoritesSliceState = {
  favoriteAnimations: [],
};

export const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState: initialState,
  reducers: {
    addFavorite: (state, action) => {
      const newFavorite = {
        animationTitle: action.payload,
        variations: [],
      };
      state.favoriteAnimations.push(newFavorite);
    },
    removeFavorite: (state, action) => {
      state.favoriteAnimations = state.favoriteAnimations.filter(
        (animation) => {
          return animation.animationTitle !== action.payload;
        }
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
