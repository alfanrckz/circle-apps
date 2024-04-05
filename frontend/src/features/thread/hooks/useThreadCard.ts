import { useSelector } from "react-redux";
import { API } from "../../../libs/api";
import { RootState } from "../../../stores/types/rootState";
// import { SET_THREAD_LIKE } from "../../../stores/rootReducer";


export function useThreadCard() {
  const threads = useSelector((state: RootState) => state.thread.threads);

  async function handlePostLike(id:number) {
    try {
       await API.post(
        "/like/thread",
        { thread: id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

    } catch (error) {
      
    }
  }
  return {
    threads,
    handlePostLike,
  };
}
