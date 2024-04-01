import { createSlice } from "@reduxjs/toolkit";
import { userReducer } from "../rootReducer";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        id: 0,
        username: "",
        fullName: "",
        email: "",
        bio: "",
        picture: "",
        followers_count: [{id: 0, following: {id: 0} }],
        followings_count: [{id: 0, follower: {id: 0} }],
      
    },
    reducers: {
        GET_PROFILE: (state, action) => {
        
      
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.fullName = action.payload.fullName;
            state.username = action.payload.username;
            state.bio = action.payload.bio;
            state.picture = action.payload.picture;
            state.followers_count = action.payload.followers_count;
            state.followings_count = action.payload.followings_count;
}}})

export const {GET_PROFILE} = profileSlice.actions
export default profileSlice.reducer