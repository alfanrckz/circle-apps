import { combineReducers } from "@reduxjs/toolkit";
import { authSlice, threadSlice } from "./slices";
import { followSlice } from "./slices/followSlice";
import { userSlice } from "./slices/userSlice";

export const { AUTH_CHECK, AUTH_LOGIN, AUTH_ERROR, AUTH_LOGOUT } =
  authSlice.actions;
export const { GET_THREADS, SET_THREAD_LIKE } = threadSlice.actions;
export const { GET_FOLLOWS, SET_FOLLOW_STATE, SET_FOLLOW } =
  followSlice.actions;
export const { GET_USERS } = userSlice.actions;

export const authReducer = authSlice.reducer;
export const threadReducer = threadSlice.reducer;
export const followReducer = followSlice.reducer;
export const userReducer = userSlice.reducer;

const rootReducer = combineReducers({
  auth: authReducer,
  thread: threadReducer,
  follow: followReducer,
  user: userReducer,
});

export default rootReducer;
