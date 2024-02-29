import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interface/user";

const initialUserState: { user: IUser[] } = { user: [] };

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    GET_USERS: (state, action) => {
      state.user = action.payload.data;
    },
  },
});
