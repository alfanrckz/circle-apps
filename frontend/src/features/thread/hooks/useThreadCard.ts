import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/types/rootState";
import { API } from "../../../libs/api";
import { SET_THREAD_LIKE } from "../../../stores/rootReducer";

export function useThreadCard() {
  const dispatch = useDispatch();
  const threads = useSelector((state: RootState) => state.thread.threads);

  async function handlePostLike(id: number, isLiked: boolean) {
    try {
      const response = await API.post(
        "/like",
        { thread: id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("BERHASIL MENMASUKKAN LIKE", response.data);

      // else {
      //   const response = await API.post(`/like/${id}`);
      //   console.log("BERHASIL menghapus LIKE", response.data);
      // }
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
