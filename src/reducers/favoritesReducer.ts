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
      const doesAnimationTitleAlreadyExist = state.favoriteAnimations.find(
        (animationGroup) => {
          return (
            animationGroup.animationTitle === action.payload.animationTitle
          );
        }
      );

      if (doesAnimationTitleAlreadyExist) {
        console.log("already in array");
        for (const animationGroup of state.favoriteAnimations) {
          if (animationGroup.animationTitle === action.payload.animationTitle) {
            animationGroup.variations.push({
              variationTitle: action.payload.variation,
            });
            break;
          }
        }
      } else {
        console.log("new in array");

        const newFavorite = {
          animationTitle: action.payload.animationTitle,
          variations: [
            {
              variationTitle: action.payload.variation,
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
