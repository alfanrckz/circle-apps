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

    
    
    // SET_FOLLOW_STATE: (state, action) => {
    //   state.follower = action.payload;
    //   state.following = action.payload;
    // },


    // SET_FOLLOW: (
    //   state,
    //   action: { payload: { id: number; isFollowed: boolean } }
    // ) => {
    //   const { id, isFollowed } = action.payload;

    //   state.follower = state.follower.map((follow) => {
    //     if (follow.id === id) {
    //       return { ...follow, is_followed: !isFollowed };
    //     }
    //     return follow;
    //   });
    //   state.following = state.following.map((follow) => {
    //     if (follow.id === id) {
    //       return { ...follow, is_followed: !isFollowed };
    //     }
    //     return follow;
    //   });
    // },
  },
});

export const { GET_FOLLOW } = followSlice.actions;

