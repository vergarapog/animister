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
    toggleFavorite: (state, action) => {
      //check first if animation group is already a favorite
      const doesAnimationTitleAlreadyExist = state.favoriteAnimations.find(
        (animationGroup) => {
          return (
            animationGroup.animationTitle === action.payload.animationTitle
          );
        }
      );

      if (doesAnimationTitleAlreadyExist) {
        //if already a favorite, iterate and find the animationGroup with its index, so that you can access its variations or delete it
        for (let i = 0; i < state.favoriteAnimations.length; i++) {
          //if statement to find the animation group equal to the payload animationTitle
          if (
            state.favoriteAnimations[i].animationTitle ===
            action.payload.animationTitle
          ) {
            //once animationGroup is found, run this if statement to check if the variation the user wants to add from payload.variationTitle already exist
            const variationIndex = state.favoriteAnimations[
              i
            ].variations.findIndex(
              (variation) =>
                variation.variationTitle === action.payload.variationTitle
            );

            //if a duplicate variation is found, its index will not be equal to -1, instead it will give its index in the array
            if (variationIndex !== -1) {
              //delete the duplicate variation from the array with its index
              state.favoriteAnimations[i].variations.splice(variationIndex, 1);

              //after deleting a duplicate, check if there is other favorite variations in the animation group. If none, delete the animation group from the favorites
              if (state.favoriteAnimations[i].variations.length === 0) {
                state.favoriteAnimations.splice(i, 1);
              }
            } else {
              //if no duplicate is found, add the favorite variation from the payload request
              state.favoriteAnimations[i].variations.push({
                variationTitle: action.payload.variationTitle,
              });
            }
            return;
          }
        }
      } else {
        //if animation group isnt a favorite, push the animation group to the state with its first favorite variation
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
export const { toggleFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
