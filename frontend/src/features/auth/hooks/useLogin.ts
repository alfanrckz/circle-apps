import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IUserLogin } from "../../../interface/user";
import { API } from "../../../libs/api";
import { AUTH_LOGIN } from "../../../stores/rootReducer";
import useToast from "../../../utils/useToast";

export function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState<IUserLogin>({
    email: "",
    password: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const toast = useToast();

  async function handleLogin() {
    try {
      const response = await API.post("/login", form);
      dispatch(AUTH_LOGIN(response.data));
      if (response) {
        toast("Login Success", "Login Success", "success");
        localStorage.setItem("authData", JSON.stringify(response.data.user));
        navigate("/");
      }
    } catch (error: any) {
      let errorMessage = "An unexpected error occurred";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }
      toast(errorMessage, "Login Error", "error");
      // console.error(error);
    }
  }

  return { handleChange, handleLogin };
}
