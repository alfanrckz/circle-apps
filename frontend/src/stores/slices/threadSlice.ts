import { IThreadCard } from "../../interface/thread";
import { createSlice } from "@reduxjs/toolkit";

const initialThreadState: { threads: IThreadCard[]; likedThreads: number[] } = {
  threads: [],
  likedThreads: [],
};

export const threadSlice = createSlice({
  name: "thread",
  initialState: initialThreadState,
  reducers: {
    GET_THREADS: (state, action) => {
      state.threads = action.payload;
    },
    SET_THREAD_LIKE: (
      state,
      action: { payload: { id: number; isLiked: boolean } }
    ) => {
      const { id, isLiked } = action.payload;

      state.threads = state.threads.map((thread) => {
        if (thread.id === id) {
          let updatedCountLike: number;
          if (isLiked) {
            updatedCountLike = 1;
          } else {
            updatedCountLike = 0;
          }
          return {
            ...thread,
            count_like: updatedCountLike,
            is_liked: !isLiked,
          };
        }
        return thread;
      });
    },
  },
});
