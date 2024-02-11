import { createSlice } from "@reduxjs/toolkit";
import { Ithreads } from "../../interface/IThreads";

const initialThreadState: { threads: Ithreads[] } = { threads: [] };

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
          return {
            ...thread,
            count_like: isLiked ? thread.count_like - 1 : thread.count_like + 1,
            is_liked: !isLiked,
          };
        }
        return thread;
      });
    },
  },
});
