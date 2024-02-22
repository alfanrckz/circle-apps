import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/types/rootState";
import { API } from "../../../libs/api";
import { SET_THREAD_LIKE } from "../../../stores/rootReducer";

export function useThreadCard() {
  const dispatch = useDispatch();
  const threads = useSelector((state: RootState) => state.thread.threads);

  async function handlePostLike(id: number, isLiked: boolean) {
    try {
      if (!isLiked) {
        await API.get("/like");
      } else {
        await API.post("/unlike");
      }
      dispatch(SET_THREAD_LIKE({ id, isLiked: isLiked }));
    } catch (error) {
      console.log("failed updating like!", error);
    }
  }

  return {
    threads,
    handlePostLike,
  };
}
