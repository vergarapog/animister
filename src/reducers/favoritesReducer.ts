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
        for (const animationGroup of state.favoriteAnimations) {
          if (animationGroup.animationTitle === action.payload.animationTitle) {
            // const variationsReduced = animationGroup.variations.reduce<
            //   string[]
            // >((accu, curr) => {
            //   return [...accu, curr.variationTitle];
            // }, []);

            const variationIndex = animationGroup.variations.findIndex(
              (variation) =>
                variation.variationTitle === action.payload.variationTitle
            );

            if (variationIndex !== -1) {
              // Delete the variation from the array
              animationGroup.variations.splice(variationIndex, 1);
            } else {
              animationGroup.variations.push({
                variationTitle: action.payload.variationTitle,
              });
            }
            return;
          }
        }
      } else {
        // for (const animationGroup of state.favoriteAnimations) {
        //   if (animationGroup.animationTitle === action.payload.animationTitle) {
        //     // Find the index of the variation to delete
        //     const variationIndex = animationGroup.variations.findIndex(
        //       (variation) =>
        //         variation.variationTitle === action.payload.variationTitleTitle
        //     );

        //     // Check if the variation exists
        //     if (variationIndex !== -1) {
        //       // Delete the variation from the array
        //       animationGroup.variations.splice(variationIndex, 1);
        //     }
        //   }
        // }
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
