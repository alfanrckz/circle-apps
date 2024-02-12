import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IUserLogin } from "../../../interface/user";
import { API } from "../../../libs/api";
import { AUTH_LOGIN } from "../../../stores/rootReducer";

export function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState<IUserLogin>({
    email: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleLogin() {
    try {
      const response = await API.post("/login", form);
      dispatch(AUTH_LOGIN(response.data));
      // console.log(response);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return { handleChange, handleLogin };
}
