import { useDispatch } from "react-redux";
import { GET_PROFILE } from "../../../stores/slices/profileSlice";
import { API } from "../../../libs/api";
import { GET_PROFILE_ID } from "../../../stores/slices/profileById";

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

  async function getProfileById() {
    const userId = localStorage.getItem("id");
    
    const response = await API.get(`/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    dispatch(GET_PROFILE_ID(response.data.data));
  }
  return {
    check,
    getProfileById
  };
};
