import { configureStore } from "@reduxjs/toolkit";
import animationsReducer from "./reducers/animationsReducer";

export default configureStore({
  reducer: {
    animations: animationsReducer,
  },
});
