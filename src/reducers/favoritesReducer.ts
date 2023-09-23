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
      //check first if animation group is already a favorite
      const doesAnimationTitleAlreadyExist = state.favoriteAnimations.find(
        (animationGroup) => {
          return (
            animationGroup.animationTitle === action.payload.animationTitle
          );
        }
      );

      if (doesAnimationTitleAlreadyExist) {
        for (let i = 0; i < state.favoriteAnimations.length; i++) {
          if (
            state.favoriteAnimations[i].animationTitle ===
            action.payload.animationTitle
          ) {
            const variationIndex = state.favoriteAnimations[
              i
            ].variations.findIndex(
              (variation) =>
                variation.variationTitle === action.payload.variationTitle
            );

            if (variationIndex !== -1) {
              // Delete the variation from the array
              state.favoriteAnimations[i].variations.splice(variationIndex, 1);
              if (state.favoriteAnimations[i].variations.length === 0) {
                state.favoriteAnimations.splice(i, 1);
              }
            } else {
              state.favoriteAnimations[i].variations.push({
                variationTitle: action.payload.variationTitle,
              });
            }
            return;
          }
        }
      } else {
        const newFavorite = {
          animationTitle: action.payload.animationTitle,
          variations: [
            {
              variationTitle: action.payload.variationTitle,
            },
          ],
        };
        state.favoriteAnimations.push(newFavorite);
      }
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
