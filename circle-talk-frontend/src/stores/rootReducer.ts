import { combineReducers } from "@reduxjs/toolkit";
import { authSlice, threadSlice } from "./slices";
import { followSlice } from "./slices/followSlice";
import { userSlice } from "./slices/userSlice";
import profileSlice from "./slices/profileSlice";
import profileById from "./slices/profileById";

export const { AUTH_CHECK, AUTH_LOGIN, AUTH_ERROR, AUTH_LOGOUT } =
  authSlice.actions;
export const { GET_THREADS, SET_THREAD_LIKE } = threadSlice.actions;
export const { GET_FOLLOW } = followSlice.actions;
export const { GET_USERS } = userSlice.actions;

export const authReducer = authSlice.reducer;
export const threadReducer = threadSlice.reducer;
export const followReducer = followSlice.reducer;
export const userReducer = userSlice.reducer;

export const profileReducer = profileSlice;
export const profileByIdReducer = profileById;

const rootReducer = combineReducers({
  auth: authReducer,
  thread: threadReducer,
  follow: followReducer,
  user: userReducer,
  profile: profileReducer,
  profileId: profileByIdReducer,
});

export default rootReducer;
