import { IThreadCard } from "../../interface/thread";
import { createSlice } from "@reduxjs/toolkit";

const initialThreadState: { threads: IThreadCard[] } = { threads: [] };

export const threadSlice = createSlice({
  name: "thread",
  initialState: initialThreadState,
  reducers: {
    GET_THREADS: (state, action) => {
      state.threads = action.payload;
      // console.log(action.payload);
    },
    SET_THREAD_LIKE: (
      state,
      action: { payload: { id: number; is_liked: boolean } }
    ) => {
      const { id, is_liked } = action.payload;
      state.threads = state.threads.map((thread: any) => {
        if (thread.id === id) {
          return {
            ...thread,
            likes_count: is_liked
              ? thread.likes_count - 1
              : thread.likes_count + 1,
            is_liked: !is_liked,
          };
        }
        console.log("ini action cok", action.payload);
        return thread;
      });
    },
  },
});
