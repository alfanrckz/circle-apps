import { IFollow } from "../../interface/follow";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { follower: IFollow[]; following: IFollow[] } = {
  follower: [],
  following: [],
};

export const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {
    GET_FOLLOW: (state, action) => {
      state.follower = action.payload.follower;
      state.following = action.payload.following;
    },
  },
});

export const { GET_FOLLOW } = followSlice.actions;

