import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IUserLogin } from "../../../interface/user";
import { API } from "../../../libs/api";
import { AUTH_LOGIN } from "../../../stores/rootReducer";
import useToast from "../../../hooks/useToast";

// const exp = new Date(Date.now() + 24 * 60 * 60 * 1000);

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
      if (response) toast(" Login success", "Login success", "success");
      console.log(response);
      localStorage.setItem("authData", JSON.stringify(response.data.user));
      // document.cookie = `C.id=${
      //   response.data.token
      // };expires=${exp.toUTCString()}`;
      navigate("/");
    } catch (error) {
      if (error) toast(" Login error", "Login error", "error");
      console.log(error);
    }
  }
  return { handleChange, handleLogin };
}
