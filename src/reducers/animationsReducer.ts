import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AnimationCategory } from "../types";

import animationsFirebaseService from "../services/animationsFirebaseService"; // use when online
import { data } from "../helpers/data"; // use when offline

import type { RootState } from "../store";

interface animationsSliceState {
  animations: AnimationCategory[];
}

const initialState: animationsSliceState = {
  animations: [],
};

export const animationsSlice = createSlice({
  name: "animations",
  initialState: initialState,
  reducers: {
    setAnimations: (state, action: PayloadAction<AnimationCategory[]>) => {
      state.animations = action.payload;
    },

    clearAnimations: (state) => {
      state.animations = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAnimations, clearAnimations } = animationsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) =>
  state.animationsReducer.animations;

// const organizeByAnimationType = (allAnimations: Animation[]) => {
//   const organizedAnimations = allAnimations.reduce((acc, curr) => {
//     const animationType = curr.animationType;

//     if (!acc[animationType]) {
//       acc[animationType] = [];
//     }

//     acc[animationType].push(curr);

//     return acc;
//   }, {} as { [key: string]: Animation[] });

//   return organizedAnimations;
// };

export const initializeAnimations = () => {
  return async (dispatch: Dispatch) => {
    const online = false; //set to true when online, set to false for debugging without internet

    let animations = [];

    if (online) {
      animations = await animationsFirebaseService.getAllAnimations(); // use when online
    } else {
      animations = data; // use when offline
    }

    // const organizedAnimations = organizeByAnimationType(allAnimations);
    // console.log(organizedAnimations);
    dispatch(setAnimations(animations));
  };
};

// get from json-server
// export const initializeAnimations = () => {
//   return async (dispatch: Dispatch) => {
//     const animations = await animationsService.getAll();
//     dispatch(setAnimations(animations));
//   };
// };

export default animationsSlice.reducer;
