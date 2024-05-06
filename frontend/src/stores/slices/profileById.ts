import { createSlice } from "@reduxjs/toolkit";

const profileById = createSlice({
    name: "profileByid",
    initialState: {
        id: 0,
        username: "",
        fullName: "",
        email: "",
        bio: "",
        picture: "",
        cover_photo: "",
        // followers_count: [{id: 0, following: {id: 0} }],
        // followings_count: [{id: 0, follower: {id: 0} }],
        followers_count: 0,
        followings_count: 0,
    },
    reducers: {
        GET_PROFILE_ID: (state, action) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.fullName = action.payload.fullName;
            state.username = action.payload.username;
            state.bio = action.payload.bio;
            state.picture = action.payload.picture;
            state.cover_photo = action.payload.cover_photo;
            state.followers_count = action.payload.followerCount;
            state.followings_count = action.payload.followingCount;
            // console.log("ini action", action.payload)
}

}})



export const {GET_PROFILE_ID} = profileById.actions
export default profileById.reducer