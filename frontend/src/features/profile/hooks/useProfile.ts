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
    // console.log(response.data.data);
    dispatch(GET_PROFILE(response.data.data));
  }
  return {
    check,
  };

  async function getProfileById() {
    const response = await API.get(`/user/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    // console.log(response.data.data);
    dispatch(GET_PROFILE(response.data.data));
  }
};
