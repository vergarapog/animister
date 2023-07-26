import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AnimationCategory } from "../types";
// import { allAnimations } from "../helpers/organizedData"; // same structure as firebase, remove later TODO:
import animationsFirebaseService from "../services/animationsFirebaseService";
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
    const animations = await animationsFirebaseService.getAllAnimations();
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
