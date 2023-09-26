import { configureStore } from "@reduxjs/toolkit";

import animationsReducer from "./reducers/animationsReducer";
import optionsReducer from "./reducers/optionsReducer";
import animatedObjectReducer from "./reducers/animatedObjectReducer";
import favoritesReducer from "./reducers/favoritesReducer";

import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favoritesReducer"],
};

const reducer = combineReducers({
  animationsReducer: animationsReducer,
  optionsReducer: optionsReducer,
  animatedObjectReducer: animatedObjectReducer,
  favoritesReducer: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
