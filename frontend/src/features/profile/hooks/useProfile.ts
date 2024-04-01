import { useDispatch } from "react-redux";
import { GET_PROFILE } from "../../../stores/slices/profileSlice";
import { API } from "../../../libs/api";

export const useProfile = () => {
  const dispatch = useDispatch();
  async function check() {
    const response = await API.get("/check", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch(GET_PROFILE(response.data.data));
  }
  return {
    check,
  };
};
